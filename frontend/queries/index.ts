import { gql } from "@apollo/client";

export const GET_ALL_MOODS = gql`
  query moods(
    $first: Int
    $skip: Int
    $orderBy: Mood_orderBy
    $orderDirection: OrderDirection
  ) {
    moods(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      hash
      message
      category
      date
    }
  }
`;

export const GET_MOOD_BY_ID = gql`
  query moods($id: ID!) {
    moods(where: { id: $id }) {
      id
      hash
      message
      category
      date
    }
  }
`;

export const GET_MOODS_BY_CATEGORY = gql`
  query moods(
    $first: Int
    $skip: Int
    $orderBy: Mood_orderBy
    $orderDirection: OrderDirection
    $category: String
  ) {
    moods(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { category: $category }
    ) {
      id
      hash
      message
      category
      date
    }
  }
`;

export const CURRENT_AUTHORS_MOODS = gql`
  query moods(
    $first: Int
    $skip: Int
    $orderBy: Mood_orderBy
    $orderDirection: OrderDirection
    $author: String
  ) {
    moods(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { author: $author }
    ) {
      id
      hash
      message
      category
      date
    }
  }
`;
