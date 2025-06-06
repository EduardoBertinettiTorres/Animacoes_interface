import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }
`;

export const FormContainer = styled.div`
  flex: 1 1 500px;
  margin: 2rem;
  background: #f7f7f7;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: rgb(43, 137, 4);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FieldGroup = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  font-size: 1rem;
  color: rgb(43, 137, 4);
  pointer-events: none;
  transition: all 0.3s ease;
  padding: 0 0.4rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.4rem 1rem 0.6rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: rgb(43, 137, 4);
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -1.2rem;
    left: 0.8rem;
    font-size: 0.8rem;
    color: rgb(43, 137, 4);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1.4rem 1rem 0.6rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: rgb(43, 137, 4);
  }
`;

export const Option = styled.option``;

export const SubmitButton = styled.button`
  padding: 0.8rem 1rem;
  background: rgb(43, 137, 4);
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover:enabled {
    background: rgb(43, 137, 4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
