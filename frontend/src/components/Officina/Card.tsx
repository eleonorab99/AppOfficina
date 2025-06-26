import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

interface OfficinaCardProps {
  title?: string;
  subheader?: string;
  image: string;
  alt?: string;
  description: string;
  expandedContent?: React.ReactNode;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledCard = styled(Card)({
  width: 320,
  display: "flex",
  flexDirection: "column",
  transition: "box-shadow 0.3s",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  "&:hover": {
    boxShadow: "0 0 0 6px rgba(255,140,0,0.3)", // sfumatura arancione
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  objectFit: "cover",
}) as typeof CardMedia;

const OfficinaCard: React.FC<OfficinaCardProps> = ({
  title,
  image,
  alt,
  description,
  expandedContent,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <StyledCardMedia component="img" src={image} alt={alt || title} />
      <CardContent sx={{ py: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      {expandedContent && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{expandedContent}</CardContent>
        </Collapse>
      )}
    </StyledCard>
  );
};

export default OfficinaCard;
