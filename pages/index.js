import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/index";
import utilStyles from "/styles/utils.module.css";
import * as ROUTES from "../constants/routes/routes";
import { getSortedPostsData } from "../lib/posts";
import {
  faUserSecret,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Date from "../components/Date/date";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, getAllAction } from "../redux/slices/userSlices";
import { useEffect } from "react";
import Comment from "../components/Comment";
import Navigation from "../components/Navigation";
export default function Home({ allPostsData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  console.log("users", users);
  return (
    <div className="container">
      <div>
        <div
          className="offcanvas offcanvas-start w-25"
          tabIndex={-1}
          id="offcanvas"
          data-bs-keyboard="false"
          data-bs-backdrop="false"
        >
          <div className="offcanvas-header">
            <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">
              Menu
            </h6>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body px-0">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link text-truncate">
                  <i className="fs-5 bi-house" />
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link text-truncate"
                >
                  <i className="fs-5 bi-speedometer2" />
                  <span className="ms-1 d-none d-sm-inline">
                    Dashboard
                  </span>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-truncate">
                  <i className="fs-5 bi-table" />
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle  text-truncate"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fs-5 bi-bootstrap" />
                  <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link text-truncate">
                  <i className="fs-5 bi-grid" />
                  <span className="ms-1 d-none d-sm-inline">Products</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-truncate">
                  <i className="fs-5 bi-people" />
                  <span className="ms-1 d-none d-sm-inline">
                    Customers
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col min-vh-100 p-4">
              {/* toggler */}
              <button
                className="btn float-end btn-danger"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
                role="button"
              >
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  className="text-warning"
                />
                <span className="text-white">Mê sờ nu</span>
              </button>
              <Layout home>
                <Head>
                  <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                  <p>Đang học NextJS trần lực...</p>
                  <p>
                    <Link
                      href={ROUTES.FIRST_POST}
                      className={utilStyles.textCute}
                    >
                      <FontAwesomeIcon icon={faUserSecret} /> Profile của tui
                    </Link>
                    <br />
                    <Link href="/posts/ssg-ssr">
                      <FontAwesomeIcon
                        icon={faHandPointRight}
                        className="text-warning"
                      />{" "}
                      Post của tui
                    </Link>
                    <br />

                    <Link href="/posts/pre-rendering">
                      <FontAwesomeIcon
                        icon={faHandPointRight}
                        className="text-warning"
                      />{" "}
                      Post của tui
                    </Link>
                  </p>
                </section>
                <section
                  className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                  <h2 className={utilStyles.headingLg}>Blog</h2>
                  <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </li>
                    ))}
                  </ul>
                </section>
                <h4>Feedback từ fanboy</h4>
                <div className="d-flex flex-wrap">
                  {users?.data?.map((item, index) => (
                    <Comment key={index} username={item.name} />
                  ))}
                </div>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
