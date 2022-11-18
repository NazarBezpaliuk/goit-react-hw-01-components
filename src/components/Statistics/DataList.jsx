import PropTypes from 'prop-types';
import { StatsList, DataItem, DataTitle, DataPercent } from './DataList.styled';

export default function DataList({ elements }) {
  return (
    <StatsList>
      {elements.map(element => (
        <DataItem key={element.id}>
          <DataTitle>{element.label}</DataTitle>
          <DataPercent>{element.percentage}%</DataPercent>
        </DataItem>
      ))}
    </StatsList>
  );
}

DataList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
