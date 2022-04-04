import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import yelp from '../api/yelp';
import {fontSize, indent} from "../constatns/styles";

interface IProps {
  navigation: {
    getParam: ((paramName: string) => string)
  };
}

type TBusiness = {
  categories: {
    alias: string
    title: string
  } [];
  name: string
  display_phone: string
  location: {
    display_address: string[]
  }
  photos: string[]
}

// Object {
//   "alias": "al-badawi-brooklyn-2",
//     "categories": Array [
//     Object {
//     "alias": "mideastern",
//       "title": "Middle Eastern",
//   },
// ],
//   "coordinates": Object {
//     "latitude": 40.69059,
//       "longitude": -73.99503,
//   },
//   "display_phone": "(718) 689-5888",
//     "hours": Array [
//     Object {
//     "hours_type": "REGULAR",
//       "is_open_now": true,
//       "open": Array [
//       Object {
//       "day": 0,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 1,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 2,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 3,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 4,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 5,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//     Object {
//       "day": 6,
//         "end": "2300",
//         "is_overnight": false,
//         "start": "1100",
//     },
//   ],
//   },
// ],
//   "id": "SwFr8vVU9j2Wlo-QejpRGA",
//     "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RL1-huxhgBtPnDLTNOwRkA/o.jpg",
//     "is_claimed": false,
//     "is_closed": false,
//     "location": Object {
//     "address1": "151 Atlantic Ave",
//       "address2": "",
//       "address3": null,
//       "city": "Brooklyn",
//       "country": "US",
//       "cross_streets": "Henry St & Clinton St",
//       "display_address": Array [
//       "151 Atlantic Ave",
//         "Brooklyn, NY 11201",
//       ],
//       "state": "NY",
//       "zip_code": "11201",
//   },
//   "name": "Al Badawi",
//     "phone": "+17186895888",
//     "photos": Array [
//     "https://s3-media1.fl.yelpcdn.com/bphoto/RL1-huxhgBtPnDLTNOwRkA/o.jpg",
//       "https://s3-media1.fl.yelpcdn.com/bphoto/xHq1PXZFS5GRWihXYvzYoA/o.jpg",
//       "https://s3-media4.fl.yelpcdn.com/bphoto/uuW031eCupsW6yqKLMtMGA/o.jpg",
//     ],
//     "price": "$$",
//     "rating": 4.5,
//     "review_count": 37,
//     "transactions": Array [
//     "delivery",
//       "pickup",
//     ],
//     "url": "https://www.yelp.com/biz/al-badawi-brooklyn-2?adjust_creative=GJXcEWqcVO7KLDwk4QlodA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source
//     =GJXcEWqcVO7KLDwk4QlodA",
// }


const ResultScreen = ({navigation}: IProps) => {
  const businessId = navigation.getParam('id')
  const [business, setBusiness] = useState<null | TBusiness>(null)

  const getBusiness = async () => {
    const result = await yelp.get("/" + businessId)
    setBusiness(result.data)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return (
    <View style={styles.wrap}>
      {business && (
        <>
          <View style={styles.header}>
            <Text style={styles.name}>{business.name}</Text>
            <View style={styles.details}>
              {business.display_phone &&  <Text style={styles.detailsText}>{business.display_phone}</Text>}
              {business.location.display_address.map((address, i) => <Text style={styles.detailsText} key={i + address}>{address}</Text>)}
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.imagesWrap}>
            {business.photos.map((photo, i) => <Image  key={i + photo} style={styles.image} source={{uri: photo}} />)}
          </ScrollView>
        </>

      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: indent.small,
  },
  name: {
    fontSize: fontSize.enormous,
    flex: 7,

  },
  details: {
    flex: 3,
  },
  detailsText: {
    fontSize: fontSize.tiny
  },

  image: {
    height: 300,
    width: 300,
  },
  imagesWrap: {
    alignItems: 'center',
  },
  header: {
    marginVertical: indent.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default ResultScreen