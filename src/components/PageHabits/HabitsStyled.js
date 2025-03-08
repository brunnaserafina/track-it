import styled from 'styled-components';

export const Habit = styled.span`
  width: 90vw;
  height: fit-content;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 16px;
  padding: 15px;
  box-sizing: border-box;

  span {
    display: flex;
    justify-content: space-between;
  }

  > span > p {
    font-size: 20px;
    color: #666666;
  }

  ion-icon {
    color: #666666;
    font-size: 15px;
  }
`;

export const Days = styled.div`
  display: flex;
`;

export const Day = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? '#cfcfcf' : '#ffffff')};
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  color: ${(props) => (props.selected ? '#ffffff' : '#dbdbdb')};
  margin-top: 10px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  font-family: Lexend Deca;
`;

export const Dayy = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.state ? '#CFCFCF' : '#ffffff')};
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  color: ${(props) => (props.state ? '#ffffff' : '#DBDBDB')};
  margin-right: 4px;
  margin-top: 2px;
  font-size: 20px;
  font-weight: 400;
  font-family: Lexend Deca;
`;

export const Form = styled.form`
  width: 90vw;
  height: 180px;
  background-color: #ffffff;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  display: ${(props) => (props.$newhabit ? 'initial' : 'none')};

  > span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 29px;
  }
`;

export const DaysWeek = styled.div`
  width: 80vw;
  display: flex;
  justify-content: start;
`;

export const Cancel = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  color: #52b6ff;
  border: 1px solid #52b6ff;
  padding: 8px;
  border-radius: 4px;
  margin-right: 23px;
  opacity: ${(props) => (props.$save ? '0.6' : '1.0')};
  cursor: pointer;

  &:hover {
    background-color: #52b6ff;
    color: #ffffff;
  }
`;
