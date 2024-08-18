import { useEffect, useState } from "react";
import { Container, CharacterCounter } from "./styles";
import PropTypes from "prop-types";

export function Textarea({ value, maxLength = 1500, ...rest }) {
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (e) => {
    setCharCount(e.target.value.length);
  };

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);
  
  return (
    <div style={{ position: "relative" }}>
      <Container
        {...rest}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
      />
      {charCount > 0 && (
        <CharacterCounter>{`${charCount}/${maxLength}`}</CharacterCounter>
      )}
    </div>
  );
}

Textarea.propTypes = {
  value: PropTypes.string,
  maxLength: PropTypes.number,
};
