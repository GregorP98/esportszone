import * as React from "react";
import "./GameCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  console.log("game is", game);
  return (
    <Link
      to={{
        pathname: `/${game.slug}`,
      }}
      state={game.slug}
      style={{ textDecoration: "none" }}
    >
      <Card className="gameCard">
        <CardMedia
          style={{
            objectFit: "cover",
            display: "inline-block",
            gridColumn: "3",
            gridRow: "2",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          component="img"
          image={game.image}
          alt={game.imageAlt}
        />
        <CardContent
          style={{ gridColumnStart: "2", gridColumnEnd: "5", gridRow: "3" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {game.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.body}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
