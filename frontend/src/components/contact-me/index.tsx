import React from "react";
import styled from "styled-components";
import Section from "../section";

const ContactMeSection = styled.div`
  text-align: justify;
  padding-top: 20px;
  height: fit-content;
  scroll-margin-top: 120px;
  p {
    margin-top: 5px;
    font-size: 18px;
    max-width: 100%;
    line-height: 25px;
    font-weight: 400;
  }
`;

const ContactMeBox = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  width: 250px;
  text-align: justify;
  word-break: break-all;
`;

const FormWrapper = styled.div`
  border-radius: 2px;
  background: linear-gradient(180deg, #19191b, #2d3036);
  width: 600px;
  height: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    gap: 10px;

    input {
      padding: 10px 5px;
    }
  }

  textarea {
    height: 100%;
  }

  input,
  textarea {
    width: 100%;
    background-color: #19191b;
    color: grey;
    padding: 10px 5px;
    border: none;
    outline: none;
    min-height: 30px;

    ::placeholder {
      color: grey;
    }
  }
`;

export default function ContactMe() {
  return (
    <ContactMeSection id="contact">
      <Section title="Contato" />
      <h1>
        <b>MANDE</b> UMA MENSAGEM
      </h1>
      <ContactMeBox>
        <Text>
          <p>
            Vamos nos conhecer melhor?, entre em contato e vamos marcar uma call
          </p>
          <br />
          <b>E-mail</b>
          <p>isaacalvesx7@gmail.com</p>
          <br />
          <b>LinkedIn</b>
          <p>linkedin.com/in/isaac-alves-melo-319b45185/</p>
        </Text>
        <FormWrapper>
          <div>
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Assunto" />
          <textarea placeholder="Mensagem" />
        </FormWrapper>
      </ContactMeBox>
    </ContactMeSection>
  );
}
