import { gql } from 'apollo-server-express';

export default gql`

    extend type Query {
      fetchTrack: [Track!]! 
    }

    extend type Mutation {
        createTrack(data: createTrackInput!): Track!
    }

    input createTrackInput {
        name: String!
        locations: [ createPointInput! ]!
    }

    input createPointInput {
        timestamp: String!
        coords: createCoordsInput!
    }

    input createCoordsInput {
        latitude: Float!
        longitude: Float!
        altitude: Float!
        accuracy: Float!
        heading: Float!
        speed: Float!
        altitudeAccuracy: Float
    }

    type Track {
        id: ID!
        user: User!
        name: String!
        locations: [ Point! ]!  
    }

    type Point {
        timestamp: String!
        coords: Coords!
    }

    type Coords {
        latitude: Float!
        longitude: Float!
        altitude: Float!
        accuracy: Float!
        heading: Float!
        speed: Float!
        altitudeAccuracy: Float
    }
`;