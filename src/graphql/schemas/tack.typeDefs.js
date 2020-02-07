import { gql } from 'apollo-server-express';

export default gql`

    extend type Query {
      fetchTrack: [Track!]! 
    }

    extend type Mutation {
        createTrack(data: createTrackInput): Track!
    }

    input createTrackInput {
        name: String!
        locations: [createPointInput!]!
    }

    input createPointInput {
        timestamp: Int!
        coords: createCoords!
    }

    input createCoords {
        latitude: Float!
        longitude: Float!
        altitude: Float!
        accuracy: Float!
        heading: Float!
        speed: Float!
    }

    type Track {
        id: ID!
        userId: ID!
        name: String!
        locations: [Point!]!  
    }

    type Point {
        timestamp: Int!
        coords: Coords!
    }

    type Coords {
        latitude: Float!
        longitude: Float!
        altitude: Float!
        accuracy: Float!
        heading: Float!
        speed: Float!
    }
`;