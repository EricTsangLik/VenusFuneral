import { Button, Text } from '@venus-funeral/ui'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MdTagFaces } from 'react-icons/md'

const textFieldCommonStyles = css`
  color: ${({ theme }) => theme.colors.default};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightgold};
  padding: 0 12px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  outline-color: ${({ theme }) => theme.colors.gold};
  width: 100%;
`

const StyledInput = styled.input`
  ${textFieldCommonStyles}
  height: 48px;
`

const StyledTextarea = styled.textarea`
  ${textFieldCommonStyles}
  padding-top: 12px;
  padding-bottom: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

const SubmittedMsgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;

  & > *:first-child {
    font-size: 24px;
    color: ${({theme}) => theme.colors.gold}
  }
`

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&")
}


const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [hasErr, setHasErr] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": e.target.getAttribute("name"),
          name: e.target.name.value,
          contactNo: e.target.contactNo.value,
          message: e.target.message.value,
        }),
      })
      setSubmitted(true)
    } catch (err) {
      console.log(err)
    }
  }

  return !submitted ? (
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <StyledInput name="name" type="text" placeholder="聯絡人姓名" required />
      <StyledInput name="contactNo" type="text" placeholder="聯絡電話" required />
      <StyledTextarea name="message" placeholder="內容" rows={7} required />
      <Button type="submit" isButton href="" variant="contained">傳送</Button>
    </StyledForm>
  ) : (
    <SubmittedMsgWrapper>
      <MdTagFaces/>
      <Text>感謝您的查詢 我們會盡快與您聯絡</Text>
    </SubmittedMsgWrapper>
  )
}

export default ContactForm
