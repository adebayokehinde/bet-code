import React, { useRef } from "react";
import Link from "next/link";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { navItems } from "./menuConstant";
// import { connect } from "react-redux";
// import { logout } from "../../../redux/actions/auth";
import { useRouter } from "next/router";

// import { useToasts } from "react-toast-notifications";

const SidebarComponent = (props) => {
  // const router = useRouter()

  // const { addToast } = useToasts();
  // // ------------- ------------------- ///
  // const notifyEvent = (type, message) => {
  //   switch (type) {
  //     case "Success":
  //       addToast(message, { appearance: "success" });
  //       break;
  //     case "Error":
  //       addToast(message, { appearance: "error" });
  //       break;
  //     case "Info":
  //       addToast(message, { appearance: "info" });
  //       break;
  //     default:
  //       break;
  //   }

  //   return true;
  // };

  // const initLogout = ()=>{
  //   props.logout()
  //   notifyEvent("Success","Logout Successful")
  //   router.push("/")
  // }




  return (
    <>
      <ProSidebar collapsed={false}>
        {/* <SidebarHeader>
          <Link href="/" passHref>
            <img
              src="https://image.shutterstock.com/image-photo/image-260nw-1139400776.jpg"
              style={{ width: "150px", height: 200, objectFit: "contain" }}
              alt="img"
            />
          </Link>
        </SidebarHeader> */}
        <SidebarContent>
          {navItems.map((navCategory, index) => (
            <Menu iconShape="square" key={index}>
              <MenuItem icon={<i className={navCategory.iClass}></i>}>
                {navCategory.category.toUpperCase()}
              </MenuItem>
              {navCategory.subItem.map((subItem, index) => (
                <SubMenu
                  title={subItem.name}
                  icon={<i className={subItem.iClass}></i>}
                  key={index}
                >
                  {subItem.items.map((item, index) => (
                    <MenuItem key={index}>
                      <Link href={item.link}>{item.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          ))}
        </SidebarContent>
        <SidebarContent>
          <Menu iconShape="square" key="2">
            <MenuItem
            // onClick={initLogout}
            icon={<i className="fa fa-sign-out" aria-hidden="true"></i>}>
              Logout
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>&copy; 2021</SidebarFooter>
      </ProSidebar>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//     isAuth: state.auth.token !== null,
//     isConsumer: state.auth.isConsumer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout()),
//   };
// };

export default SidebarComponent;
