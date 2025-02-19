"use client";
import { Box, Button, TextField, FormControl } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useScreenInfo } from "../../Utils/useScreenInfo"; // Adjust the path as needed

export default function ContactUs() {
  const { isMobile } = useScreenInfo();
  return (
    <>
      <Box
        componet={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box mt={{ xs: "100px", md: "196px" }}>
          <Box
            component={"h1"}
            fontSize={{ xs: "24px", md: "45px" }}
            color={"#fff"}
            textAlign={"center"}
            fontWeight={700}
          >
            Contact Us
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"16px"} mt={"16px"}>
            <Image
              src="/images/mail.svg"
              width={isMobile ? 20 : 24}
              height={isMobile ? 20 : 24}
              alt="mail"
            />
            <Box
              componet={"p"}
              fontSize={{ xs: "12px", md: "16px" }}
              color={"fff"}
              fontWeight={400}
            >
              team@aivoicecreator.com
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "40px", md: "80px" },
            maxWidth: "964px",
            width: "87.69%",
          }}
        >
          <form
            style={{
              width: "100%",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={{ xs: "column", md: "row" }}
              gap={"20px"}
              width={"100%"}
            >
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  id={"first_name"}
                  placeholder={"First Name*"}
                  type={"text"}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "rgba(16, 15, 18, 1)",
                    "& input": { color: "#fff", paddingY: "17.5px" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  id={"last_name"}
                  placeholder={"Last Name*"}
                  type={"text"}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "rgba(16, 15, 18, 1)",
                    "& fieldset": { border: "none" },
                    "& input": { color: "#fff", paddingY: "17.5px" },
                  }}
                />
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <TextField
                fullWidth
                id={"email"}
                placeholder={"Email*"}
                type={"email"}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  "& input": { color: "#fff", paddingY: "17.5px" },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                fullWidth
                id={"phone_number"}
                placeholder={"Phone Number*"}
                type={"number"}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  "& input": { color: "#fff", paddingY: "17.5px" },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                multiline
                minRows={4}
                fullWidth
                id={"message"}
                placeholder={"Your message..."}
                type={"text"}
                sx={{
                  backgroundColor: "rgba(16, 15, 18, 1)",
                  borderRadius: "10px",
                  "& textarea": { color: "#fff" },
                }}
              />
            </FormControl>
            <Button
              type={"submit"}
              sx={{
                color: "#fff",
                height: "48px",
                fontSize: "16px",
                fontWeight: 600,
                maxWidth: { xs: "100%", md: "332px" },
                width: "100%",
                background:
                  "linear-gradient(to right, rgba(43, 17, 115, 1), rgba(89, 26, 216, 1), rgba(239, 26, 204, 1))",
                borderRadius: "8px",
              }}
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
