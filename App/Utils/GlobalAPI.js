import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-northeast-1.hygraph.com/v2/clr30vontdkqt01tc7niifdt1/master"

const getSlider = async () =>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
    getSlider
}
