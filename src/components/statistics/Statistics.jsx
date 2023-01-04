import Box from 'components/Box/Box.styled';
import { List, StatisticItem, StatisticTitle } from './Statistics.styled';
import { StatisticsPropTypes } from './Statitstics.types';

export default function Statistics({ title, stats }) {
  return (
    <Box
      as="section"
      boxShadow="box"
      display="flex"
      flexDirection="column"
      width="fit-content"
      bg="white"
      my={3}
      borderRadius="small"
      overflow="hidden"
    >
      {title && <StatisticTitle>Upload stats</StatisticTitle>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticItem>
        ))}
      </List>
    </Box>
  );
}

Statistics.propTypes = StatisticsPropTypes;
