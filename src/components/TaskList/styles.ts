import { StyleSheet } from "react-native";
import Theme from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 64,
  },
  emptyContainer: {
    alignItems: "center",
    paddingTop: 48,
    borderTopColor: Theme.colors.GRAY_400,
    borderTopWidth: 1,
    transform: [{ scaleY: -1 }]
  },
  emptyIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  title: {
    fontWeight: "bold",
    color: Theme.colors.GRAY_300,
  },
  subtitle: {
    color: Theme.colors.GRAY_300,
  }
})