import { useLocation } from "react-router-dom";

export default function SearchQuery(query) {
  return new URLSearchParams(useLocation().search).get(query);
}
