
import PropTypes from 'prop-types';
import { Title, Section } from './/Statistics.styled';

export default function Stats({ title, children }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
}

Stats.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};