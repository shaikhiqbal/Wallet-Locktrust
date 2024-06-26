import React, { useContext } from "react";
import PaymentChart from "../../../components/merchant-dashboard-2/dashboard/PaymentChart";
import PaymentUpdates from "../../../components/merchant-dashboard-2/dashboard/PaymentUpdates";
import Transections from '../../../components/merchant-dashboard-2/dashboard/Transections'

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";
import { Card, Col, Row } from "reactstrap";
const dashboard = () => {
  const context = useContext(ThemeColors);
  return (
    <Row>
      <Col sm={12} md={8}>
        <PaymentChart
          primary={context.colors.primary.main}
          warning={context.colors.warning.main}
        />
      </Col>
      <Col sm={12} md={4}>
        <Row>
          <PaymentUpdates />
        </Row>
      </Col>
      <Col sm={12} >
      <Card title='Tabs with icons' className='py-3'>
        <h3 className="text-center my-4">Transaction Details</h3>
        <Transections/>
          </Card>
      </Col>
    </Row>
  );
};

export default dashboard;
{/* <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            <Home size={14} />
            <span className='align-middle'>Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            <Settings size={14} />
            <span className='align-middle'>Service</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>
            <EyeOff size={14} />
            <span className='align-middle'>Disabled</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            <User size={14} />
            <span className='align-middle'>Account</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <p>
            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
          </p>
          <p>
            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
          </p>
        </TabPane>
        <TabPane tabId='2'>
          <p>
            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
          </p>
          <p>
            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
          </p>
        </TabPane>
        <TabPane tabId='3'>
          <p>
            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
          </p>
          <p>
            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
          </p>
        </TabPane>
      </TabContent>
    </Fragment> */}