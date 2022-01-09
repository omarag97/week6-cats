import React, { useState } from 'react'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './App'

function Cat() {
    const [url, setUrl] = useState('')
    const [itemCount, setItemCount] = React.useState(1);
    function fetch_data() {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then (res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error ("Request Failed");
        },networkError => console.log(networkError.message)
        ).then (jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }  

    return (
        <div className="cat_main">
            <img src={url} className="cat_img" />
            <button className="cat_btn" onClick={fetch_data}>NEXT CAT!</button>
        <div style={{ display: "block", padding: 30 }}>
        <div>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
          </Badge>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
              >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
    );
  };

export default Cat;