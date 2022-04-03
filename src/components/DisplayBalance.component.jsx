import { Statistic, StatisticLabel, StatisticValue } from "semantic-ui-react";

const DisplayBalance = ({ size = "tiny", color = "black", title, value }) => (
  <Statistic size={size} color={color}>
    <StatisticLabel style={{ textAlign: "left" }}>{title}</StatisticLabel>
    <StatisticValue>{value}</StatisticValue>
  </Statistic>
);

export default DisplayBalance;
