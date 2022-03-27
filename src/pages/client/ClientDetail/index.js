import React from 'react';
import ContainerCard from '../../../components/ContainerCard';

const userInfo = {
  name: 'Tom Luis Cruis',
  email: 'tomcruise@gmail.com',
  address: 'P2, BLK3, LOT18, Deca Homes, Tungkil, Minglanilla, Cebu',
  sex: 'Male',
  birthdate: 'July 3, 1962',
  mobile_no: '09655867131',
  member_since: 'May 26, 2019',
  valid_id: "Driver's License"
};

const ClientDetail = () => {
  return (
    <div className="main-content">
      <ContainerCard link="clients" userInfo={userInfo}></ContainerCard>
    </div>
  );
};

export default ClientDetail;
