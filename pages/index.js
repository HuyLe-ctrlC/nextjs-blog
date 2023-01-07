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
  return (
    <div className="container">
      <div>
        <Navigation />
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
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-warning fw-bold">
                    <Link href="/new-meetup" className="text-white">
                      Tạo cuộc họp với tui!
                    </Link>
                  </button>
                </div>
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
