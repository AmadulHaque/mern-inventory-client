import React, { Fragment, useRef ,useEffect} from 'react';
import { Accordion, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { FaHome,FaTasks,FaPlusCircle,FaProductHunt,FaQuoteRight,FaUserAlt,FaTruck,FaStore} from "react-icons/fa";
import {AiOutlineLogout, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import {removeSessions,getUserDetails} from "../../helper/SessionHelper";
const MasterLayout = (props) => {


  let contentRef, sideNavRef,topNavRef = useRef();

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    let topNav = topNavRef;
    if (sideNav.classList.contains('side-nav-open')) {
      sideNav.classList.add('side-nav-close');
      sideNav.classList.remove('side-nav-open');
      content.classList.add('content-expand');
      content.classList.remove('content');
      topNav.classList.remove('top-nav-open');
      topNav.classList.add('top-nav-close');
    } else {
      sideNav.classList.remove('side-nav-close');
      sideNav.classList.add('side-nav-open');
      content.classList.remove('content-expand');
      content.classList.add('content');
      topNav.classList.add('top-nav-open');
      topNav.classList.remove('top-nav-close');
    }
  };

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
          item.subMenu.map((subItem) => {
            return subItem?.url;
          })
      );
    });
    return urlList.findIndex((items) =>
        items.includes(window.location.pathname)
    );
  };

  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: <FaHome className="side-bar-item-icon" />,
      url: '/',
      subMenu: [],
    },
    {
      title: 'Customer',
      icon: <FaUserAlt  className="side-bar-item-icon" />,
      url: '/Customer',
      subMenu: [
        {
          title: 'New Customer',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/CustomerCreateUpdatePage',
        },
        {
          title: 'Customer List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/CustomerListPage',
        },
      ],
    },
    {
      title: 'Supplier',
      icon: <FaTruck className="side-bar-item-icon" />,
      url: '/Supplier',
      subMenu: [
        {
          title: 'New Supplier',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SupplierCreateUpdatePage',
        },
        {
          title: 'Supplier List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/SupplierListPage',
        },
      ],
    },
    {
      title: 'Expense',
      icon: <FaStore  className="side-bar-item-icon" />,
      url: '/Expense',
      subMenu: [
        {
          title: 'New Expense Type',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseTypeCreateUpdatePage',
        },
        {
          title: 'Expense Type List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/ExpenseTypeListPage',
        },
        {
          title: 'New Expense',
          icon: <FaPlusCircle  size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseCreateUpdatePage',
        },
        {
          title: 'Expense List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/ExpenseListPage',
        },
      ],
    },
    {
      title: 'Product',
      icon: <FaProductHunt  className="side-bar-item-icon" />,
      url: '/product',
      subMenu: [
        {
          title: 'New Product',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/product/add',
        },
        {
          title: 'Product List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/product/list',
        },
      ],
    },
    {
      title: 'Category',
      icon: <FaQuoteRight  className="side-bar-item-icon" />,
      url: '/category',
      subMenu: [
        {
          title: 'New Category',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/category/add',
        },
        {
          title: 'Category List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/category/list',
        },
      ],
    },
    {
      title: 'Brand',
      icon: <FaQuoteRight  className="side-bar-item-icon" />,
      url: '/brand',
      subMenu: [
        {
          title: 'New Brand',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/brand/add',
        },
        {
          title: 'Brand List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/brand/list',
        },
      ],
    },
    {
      title: 'Purchase',
      icon: <FaQuoteRight className="side-bar-item-icon" />,
      url: '/Purchase',
      subMenu: [
        {
          title: 'New Purchase',
          icon: <FaPlusCircle size={16} className="side-bar-subitem-icon" />,
          url: '/PurchaseCreateUpdatePage',
        },
        {
          title: 'Purchase List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/PurchaseListPage',
        },
      ],
    },
    {
      title: 'Sale',
      icon: <FaQuoteRight className="side-bar-item-icon" />,
      url: '/Sale',
      subMenu: [
        {
          title: 'New Sale',
          icon: <FaPlusCircle  size={16} className="side-bar-subitem-icon" />,
          url: '/SalesCreateUpdatePage',
        },
        {
          title: 'Sale List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/SalesListPage',
        },
      ],
    },
    {
      title: 'Return',
      icon: <FaQuoteRight className="side-bar-item-icon" />,
      url: '/Sale',
      subMenu: [
        {
          title: 'New Return',
          icon: <FaPlusCircle  size={16} className="side-bar-subitem-icon" />,
          url: '/ReturnCreateUpdatePage',
        },
        {
          title: 'Return List',
          icon: (
              <FaTasks size={16} className="side-bar-subitem-icon" />
          ),
          url: '/ReturnListPage',
        },
      ],
    },
  ];

  const UserLogout = ()=>{
    removeSessions();
  }

  return (
      <Fragment>
        <Navbar className="fixed-top px-0 ">
          <Container fluid={true}>

            <Navbar.Brand>
              <div ref={(div) => {topNavRef = div}} className="top-nav-open">
                <h4 className="text-white m-0 p-0"><a onClick={MenuBarClickHandler}><AiOutlineMenu /></a></h4>
              </div>
            </Navbar.Brand>

            <div className="float-right h-auto d-flex align-items-center">
              <div className="user-dropdown">
                <img className="icon-nav-img icon-nav" src={getUserDetails()['photo']} alt=""/>
                <div className="user-dropdown-content ">
                  <div className="mt-4 text-center">
                    <img className="icon-nav-img" src={getUserDetails()['photo']} alt=""/>
                    <h6>{getUserDetails()['username']}</h6>
                    <hr className="user-dropdown-divider  p-0"/>
                  </div>
                  <NavLink to="/Profile" className="side-bar-item">
                    <AiOutlineUser className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Profile</span>
                  </NavLink>
                  <a onClick={UserLogout}  className="side-bar-item">
                    <AiOutlineLogout className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Logout</span>
                  </a>
                </div>
              </div>
            </div>

          </Container>
        </Navbar>


        <div ref={(div) => {sideNavRef = div}} className="side-nav-open border-radius-0 card">
          <NavLink to="/" end className="d-flex justify-content-center sticky-top bg-white">
            <img className="logo"/>
          </NavLink>

          <Accordion defaultActiveKey={`${isSidebarAccordionActive()}`}>
            {sidebarItems.map((item, index) => {
              return item.subMenu.length !== 0 ? (
                  <Accordion.Item
                      key={index.toString()}
                      eventKey={`${index}`}
                      className="mt-2"
                  >
                    <Accordion.Header>
                      <div className="side-bar-item">
                        {item.icon}
                        <span className="side-bar-item-caption">
                      {item.title}
                    </span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.subMenu.map((subItem, index) => (
                          <NavLink
                              key={index.toString()}
                              className={(navData) =>
                                  navData.isActive
                                      ? 'side-bar-subitem-active side-bar-subitem '
                                      : 'side-bar-subitem'
                              }
                              to={subItem?.url}
                              end
                          >
                            {subItem?.icon}
                            <span className="side-bar-subitem-caption">
                        {subItem?.title}
                      </span>
                          </NavLink>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
              ) : (
                  <NavLink
                      className={(navData) =>
                          navData.isActive
                              ? 'side-bar-item-active side-bar-item mt-2'
                              : 'side-bar-item mt-2'
                      }
                      to={'/'}
                      end
                  >
                    {item.icon}
                    <span className="side-bar-item-caption">
                  {item.title}
                </span>
                  </NavLink>
              );
            })}
          </Accordion>

        </div>
        <div ref={(div) => (contentRef = div)} className="content">
          {props.children}
        </div>
      </Fragment>
  );
};

export default MasterLayout;
