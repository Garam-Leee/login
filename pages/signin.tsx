import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
export default function signin() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  function valdateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <LoginWrapper>
      <h1
        style={{
          color: "#fff",
        }}
      >
        올라케어
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <Input
          id="email"
          placeholder="Email"
          aria-label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input.Password
          id="password"
          aria-label="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          color="primary"
          auto
          onPress={() => {
            if (!valdateEmail(email as string)) {
              Swal.fire({
                width: 400,
                icon: "error",
                background: "#000",
                color: "#fff",
                html: "이메일 형식이 올바르지 않습니다.<br><br>",
                showConfirmButton: false,
                timer: 2000,
              });

              return;
            }

            if (password.length < 6) {
              Swal.fire({
                icon: "error",
                background: "#000",
                color: "#fff",
                html: "비밀번호는 6자리 이상이어야 합니다.<br><br>",
                showConfirmButton: false,
                timer: 1500,
              });
              return;
            }
          }}
        >
          Submit
        </Button>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
