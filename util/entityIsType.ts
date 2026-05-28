function entityIsType<T extends { __typename?: string }>(
  entity: {
    __typename?: string;
  },
  typename: string,
): entity is T {
  return entity?.__typename === typename;
}

export default entityIsType;
