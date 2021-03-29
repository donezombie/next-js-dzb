import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/actions";
import { useRouter } from "next/router";

const Header = (props) => {
  const distpatch = useDispatch();
  const router = useRouter();
  const authReducer = useSelector((state) => state.authReducer);

  const isLogin = authReducer?.auth?.isLogin;

  return (
    <ul className="nav dzb">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/other-route">
          <a>Private page</a>
        </Link>
      </li>
      {isLogin ? (
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              distpatch(logout());
            }}
          >
            Logout
          </a>
        </li>
      ) : (
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Header;
