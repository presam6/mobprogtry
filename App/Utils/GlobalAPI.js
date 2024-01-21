import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-northeast-1.hygraph.com/v2/clr30vontdkqt01tc7niifdt1/master"

const getSlider = async () => {
  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
          location {
            latitude
            longitude
          }
        }
      }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCategories = async () => {
  const query = gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
    `
  const result = await request(MASTER_URL, query);
  return result;
}

const getBusinessList = async () => {
  const query = gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      image {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getBusinessListByCategory = async (category) => {
  const query = gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+ category + `"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      image {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const createOrder = async (data) => {
  const mutationQuery = gql`
  mutation createOrder {
    createOrder(
      data: {orderStatus: Ordered, 
        businessList: {connect: {id: "`+ data.businessId + `"}}, 
      date: "`+ data.date + `", 
      time: "`+ data.time + `", 
      userEmail: "`+ data.userEmail + `", 
      userName: "`+ data.userName + `"}
    ) {
      id
    }
    publishManyOrders(to: PUBLISHED){
      count
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createOrder,
}
