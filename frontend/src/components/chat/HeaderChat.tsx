import { createStyles, rem, Select } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    position: "absolute",
    color: "white",
  },

  input: {
    color: "white",
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    color: "white",
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

const HeaderChat = () => {
  const { classes } = useStyles();

  const users = [
    { id: "1", username: "User 1" },
    { id: "2", username: "User 2" },
    { id: "3", username: "User 3" },
    { id: "4", username: "User 4" },
  ];

  return (
    <div className=" text-zinc-50">
      <Select
        mt="md"
        withinPortal
        data={users.map((user) => ({
          value: user.id,
          label: user.username,
        }))}
        placeholder="1 member"
        label="Key: "
        classNames={classes}
      />
    </div>
  );
};

export default HeaderChat;
