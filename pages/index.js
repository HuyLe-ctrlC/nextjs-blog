import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/index";
import utilStyles from "/styles/utils.module.css";
import * as ROUTES from "../constants/routes/routes";
import { getSortedPostsData } from "../lib/posts";
import {
  faUserSecret,
  faBookOpen,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Date from "../components/Date/date";
export default function Home({ allPostsData }) {
  // console.log("allPostsData", allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Đang học NextJS trần lực...</p>
        <p>
          <Link href={ROUTES.FIRST_POST} className={utilStyles.textCute}>
            <FontAwesomeIcon icon={faUserSecret} /> Profile của tui
          </Link>
          <br />
          <Link href="/posts/ssg-ssr">
            <FontAwesomeIcon icon={faHandPointRight} className="text-warning" />{" "}
            Post của tui
          </Link>
          <br />

          <Link href="/posts/pre-rendering">
            <FontAwesomeIcon icon={faHandPointRight} className="text-warning" />{" "}
            Post của tui
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
    </Layout>
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
