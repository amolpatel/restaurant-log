import React, { ReactNode, FC, ReactElement } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Restaurant, { RestaurantProps } from "../components/Restaurant";
import "bootstrap/dist/css/bootstrap.css";

type Props = {
  restaurants: RestaurantProps[];
};

const RestaurantLog: FC<Props> = (props): ReactElement => {
  const visited = props.restaurants.filter((r) => r.visited);
  const notVisited = props.restaurants.filter((r) => !r.visited);
  return (
    <Layout>
      <div className="page">
        <h1 className="display-4 my-3">Restaurant Log</h1>
        <button type="button" className="btn btn-primary">
          Add Restaurant
        </button>
        <main>
          <h4 className="mt-5 mb-3">Visited</h4>
          {visited.map((restaurant) => (
            <div key={restaurant.id} className="card my-2">
              <Restaurant restaurant={restaurant} />
            </div>
          ))}
          <h4 className="mt-5 mb-3">Not Visited</h4>
          {notVisited.map((restaurant) => (
            <div key={restaurant.id} className="card my-2">
              <Restaurant restaurant={restaurant} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/");
  const restaurants = await res.json();
  return {
    props: { restaurants },
  };
};

export default RestaurantLog;
