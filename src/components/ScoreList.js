import React, { memo } from 'react';

import Score from './Score';
import {
  ListContainer,
  ItemBox,
  ItemRanking,
  ItemPicture,
  RankingContainer,
  ItemName
} from './StyledCompontents';

const ScoreList = ({ data }) => (
  <RankingContainer>
  <ListContainer>
    {data.map((item, index) => (
      <ItemBox key={item.userID} ranking={item.ranking}>
        <ItemRanking ranking={item.ranking}>{item.ranking}</ItemRanking>
        <ItemName>{item.displayName}</ItemName>
        <Score score={item.score} />
      </ItemBox>
    ))}
  </ListContainer>
  </RankingContainer>
);

export default memo(ScoreList);
