import React, { FC, ReactElement } from "react";
import Router from "next/router";

export type RestaurantProps = {
  id: number;
  name: string;
  city: string;
  visited: boolean;
};

async function visited(id: number, visited: boolean): Promise<void> {
  console.log(id, visited);
  await fetch(`http://localhost:3001/visited/${id}/${visited}`, {
    method: "PUT",
  });
  await Router.push("/");
}

const Post: FC<{ restaurant: RestaurantProps }> = ({
  restaurant,
}): ReactElement => {
  return (
    <div className="card-body">
      <dl className="row">
        <dt className="col-sm-1">Name</dt>
        <dd className="col-sm-10">{restaurant.name}</dd>
      </dl>
      <dl className="row">
        <dt className="col-sm-1">City</dt>
        <dd className="col-sm-10">{restaurant.city}</dd>
      </dl>
      <dl className="row">
        <dt className="col-sm-1">Visited?</dt>
        <dd className="col-sm-10">
          <input
            type="checkbox"
            checked={restaurant.visited}
            onChange={() => visited(restaurant.id, !restaurant.visited)}
          />
        </dd>
      </dl>
    </div>
  );
};

export default Post;
