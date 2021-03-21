import React, { memo } from 'react';

import Score from './Score';
import {
  ListContainer,
  ItemBox,
  ItemRanking,
  ItemPicture,
  ItemName
} from './StyledCompontents';

const ScoreList = ({ data }) => (
  <ListContainer>
    {data.map((item, index) => (
      <ItemBox key={item.userID} ranking={item.ranking}>
        <ItemRanking ranking={item.ranking}>{item.ranking}</ItemRanking>
        <ItemPicture picture={item.picture} />
        <ItemName>{item.displayName}</ItemName>
        <Score score={item.score} />
      </ItemBox>
    ))}
  </ListContainer>
);

export default memo(ScoreList);
