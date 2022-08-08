import styled from "styled-components";

export const DayWeek = styled.h5`
  font-size: 23px;
  color: #126ba5;
`;

export const TodayContainer = styled.div`
  padding: 30px 15px;
  margin-top: 70px;
`;

export const Concluded = styled.p`
  font-size: 18px;
  color: ${(props) => props.color};
  margin-bottom: 25px;
  margin-top: 7px;
`;

export const Sequence = styled.div`
  width: 90vw;
  height: 95px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
    color: #666666;
    margin-bottom: 3px;
  }
`;

export const Current = styled.span`
  font-size: 13px;
  color: ${(props) => (props.$color ? '#8FC549' : '#666666')};
`;

export const Highest = styled.span`
  font-size: 13px;
  color: ${(props) => (props.$color ? '#8FC549' : '#666666')};
`;

export const Check = styled.div`
  ion-icon {
    font-size: 69px;
    color: ${(props) => (props.$color ? '#8FC549' : '#e7e7e7')};
  }
`;
