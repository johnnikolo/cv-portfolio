import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    IconButton,
    useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import Lottie from "lottie-react";
import codingAnimation from "../assets/loaderCat.json";
import { personal } from "../data";
import { Animate } from "./Animate";

const PHRASES = [
    "observability tools",
    "component libraries",
    "alerting systems",
    "full-stack products",
];

function useTypingEffect(phrases) {
    const [displayed, setDisplayed] = useState("");
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[phraseIdx];
        let timeout;

        if (!deleting && displayed === current) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && displayed === "") {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
        } else {
            timeout = setTimeout(
                () =>
                    setDisplayed(
                        deleting
                            ? displayed.slice(0, -1)
                            : current.slice(0, displayed.length + 1),
                    ),
                deleting ? 35 : 75,
            );
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, phraseIdx, phrases]);

    return displayed;
}

const [firstName, lastName] = personal.name.split(" ");

export function Hero() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const typedText = useTypingEffect(PHRASES);

    return (
        <Box
            id="hero"
            component="section"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                pt: 10,
                pb: 6,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Dot grid */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: isDark
                        ? "radial-gradient(circle, rgba(108,99,255,0.12) 1px, transparent 1px)"
                        : "radial-gradient(circle, rgba(80,70,229,0.08) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    zIndex: 0,
                }}
            />
            {/* Top glow */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    top: "-10%",
                    right: "10%",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: isDark
                        ? "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(80,70,229,0.1) 0%, transparent 70%)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        flexDirection: { xs: "column-reverse", md: "row" },
                    }}
                >
                    {/* Left: text */}
                    <Box sx={{ flex: "1 1 0", minWidth: 0 }}>
                        <Animate>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {
                                        xs: "2.6rem",
                                        sm: "3.8rem",
                                        md: "4.8rem",
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    mb: 1,
                                    color: "text.primary",
                                }}
                            >
                                Hi all, I'm{" "}
                                <Box
                                    component="span"
                                    sx={{ color: "primary.main" }}
                                >
                                    {firstName} 👋
                                </Box>{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        display: "inline-block",
                                        animation:
                                            "wave 1.8s ease-in-out infinite",
                                        transformOrigin: "70% 70%",
                                        "@keyframes wave": {
                                            "0%,50%,100%": {
                                                transform: "rotate(0deg)",
                                            },
                                            "10%,30%": {
                                                transform: "rotate(-10deg)",
                                            },
                                            "20%": {
                                                transform: "rotate(12deg)",
                                            },
                                            "40%": {
                                                transform: "rotate(9deg)",
                                            },
                                        },
                                    }}
                                ></Box>
                            </Typography>
                        </Animate>

                        <Animate delay={0.08}>
                            <Typography
                                variant="h4"
                                component="p"
                                sx={{
                                    color: "text.secondary",
                                    fontWeight: 400,
                                    mb: 2,
                                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                                    lineHeight: 1.5,
                                }}
                            >
                                A passionate Software Engineer
                                <br />
                                building{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 600,
                                    }}
                                >
                                    {typedText}
                                    <Box
                                        component="span"
                                        sx={{
                                            display: "inline-block",
                                            width: "2px",
                                            height: "1em",
                                            bgcolor: "primary.main",
                                            ml: "2px",
                                            verticalAlign: "text-bottom",
                                            animation:
                                                "blink 1s step-end infinite",
                                            "@keyframes blink": {
                                                "0%,100%": { opacity: 1 },
                                                "50%": { opacity: 0 },
                                            },
                                        }}
                                    />
                                </Box>
                            </Typography>
                        </Animate>

                        <Animate delay={0.16}>
                            <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                                {[
                                    personal.linkedin,
                                    personal.github,
                                    `mailto:${personal.email}`,
                                ].map((href, i) => {
                                    const icons = [
                                        <LinkedInIcon />,
                                        <GitHubIcon />,
                                        <EmailIcon />,
                                    ];
                                    const labels = [
                                        "LinkedIn",
                                        "GitHub",
                                        "Email",
                                    ];
                                    const colors = [
                                        "#0A66C2",
                                        isDark ? "#ccd6f6" : "#1a1a2e",
                                        "#6c63ff",
                                    ];
                                    return (
                                        <IconButton
                                            key={i}
                                            component="a"
                                            href={href}
                                            target={
                                                href.startsWith("mailto")
                                                    ? undefined
                                                    : "_blank"
                                            }
                                            rel="noopener noreferrer"
                                            aria-label={labels[i]}
                                            sx={{
                                                color: "text.secondary",
                                                border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                                                borderRadius: 2,
                                                "&:hover": {
                                                    color: colors[i],
                                                    borderColor: colors[i],
                                                    bgcolor: "transparent",
                                                },
                                            }}
                                        >
                                            {icons[i]}
                                        </IconButton>
                                    );
                                })}
                            </Stack>
                        </Animate>

                        <Animate delay={0.24}>
                            <Stack
                                direction="row"
                                spacing={2}
                                flexWrap="wrap"
                                useFlexGap
                            >
                                <Button
                                    variant="contained"
                                    href="#contact"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.3,
                                        bgcolor: "primary.main",
                                        color: "#fff",
                                        fontWeight: 700,
                                        boxShadow: `0 4px 20px ${theme.palette.primary.main}55`,
                                        "&:hover": {
                                            bgcolor: "primary.main",
                                            opacity: 0.88,
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    Contact me
                                </Button>
                                <Button
                                    variant="outlined"
                                    href={personal.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="large"
                                    startIcon={<DownloadIcon />}
                                    sx={{
                                        px: 4,
                                        py: 1.3,
                                        borderColor: "primary.main",
                                        color: "primary.main",
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}12`,
                                        },
                                    }}
                                >
                                    See my resume
                                </Button>
                                <Button
                                    variant="outlined"
                                    href="#experience"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.3,
                                        borderColor: "primary.main",
                                        color: "primary.main",
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}12`,
                                        },
                                    }}
                                >
                                    See my work
                                </Button>
                            </Stack>
                        </Animate>
                    </Box>

                    {/* Right: Lottie */}
                    <Box
                        sx={{
                            flex: "0 0 auto",
                            width: { xs: "80%", sm: "60%", md: "45%" },
                            maxWidth: 460,
                        }}
                    >
                        <Lottie
                            animationData={codingAnimation}
                            loop
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
