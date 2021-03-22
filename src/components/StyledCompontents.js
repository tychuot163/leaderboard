import styled from 'styled-components';
import { RANKING_COLOR } from '../constants';


export const RankingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  background-image: url(https://i.imgur.com/bIABy42.png);
`;

export const ListContainer = styled.div`
  background-color: #f7f5f6;
  position: absolute;
  width: 35%;
  height: 500px;
  border-radius: 10px;
  left: 50%;
  top: 115px;
  transform: translateX(-50%);
`;

export const ItemBox = styled.div`
  width: 90%;
  height: 50px;
  position: absolute;
  top: ${(props) => 50 * (props.ranking - 1)}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  border-bottom: 1px solid #efeded;
`;

export const ItemRanking = styled.div`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: 14px;
  background-color: ${(props) => RANKING_COLOR[props.ranking - 1] || '#8eb9f5'};
  font-family    : 'Montserrat', sans-serif !important;
`;

export const ItemName = styled.div`
  color: #363336;
  margin-left: 8px;
  font-family    : 'Montserrat', sans-serif !important;
`;

export const ItemPicture = styled.div`
  background-color: #e5e5e5;
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
`;

export const ItemScore = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
  font-family    : 'Montserrat', sans-serif !important;

`;
