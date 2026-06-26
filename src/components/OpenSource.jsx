import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Animate } from "./Animate";

const GITHUB_USER = "yiannisnikolopoulos";
const KIBANA_COMMITS_URL = `https://github.com/elastic/kibana/commits?author=${GITHUB_USER}`;

export function OpenSource() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="section"
            id="opensource"
            sx={{
                py: 12,
                bgcolor: isDark
                    ? "rgba(108,99,255,0.04)"
                    : "rgba(80,70,229,0.03)",
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Animate>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "primary.main",
                            letterSpacing: 4,
                            fontWeight: 600,
                            fontSize: "0.72rem",
                        }}
                    >
                        GitHub
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        Open Source
                    </Typography>
                </Animate>

                <Animate delay={0.08}>
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            border: `2px solid ${isDark ? "rgba(108,99,255,0.4)" : "rgba(80,70,229,0.3)"}`,
                            bgcolor: isDark
                                ? "rgba(108,99,255,0.1)"
                                : "rgba(80,70,229,0.07)",
                            mb: 3,
                            mt: 1,
                        }}
                    >
                        <GitHubIcon
                            sx={{ fontSize: 40, color: "primary.main" }}
                        />
                    </Box>
                </Animate>

                <Animate delay={0.14}>
                    <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", mb: 5, lineHeight: 1.8 }}
                    >
                        During my time at Elastic, I contributed to{" "}
                        <strong style={{ color: "#00bfb3" }}>Kibana</strong>.
                        One of the world's largest and most active open source
                        repositories, with thousands of contributors and
                        millions of users worldwide.
                    </Typography>
                </Animate>

                <Animate delay={0.2}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<GitHubIcon />}
                        href={KIBANA_COMMITS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            px: 5,
                            py: 1.4,
                            bgcolor: "primary.main",
                            color: "#fff",
                            fontWeight: 700,
                            boxShadow: `0 4px 20px ${theme.palette.primary.main}50`,
                            "&:hover": {
                                bgcolor: "primary.main",
                                opacity: 0.88,
                                boxShadow: "none",
                            },
                        }}
                    >
                        View My Kibana Contributions
                    </Button>
                </Animate>
            </Container>
        </Box>
    );
}
