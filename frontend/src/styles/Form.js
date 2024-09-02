import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px #ccc;
    padding: 20px;
    border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 13px;
`

export const Label = styled.label`
`

export const Input = styled.input`
    color: black;
    padding: 5px;
`

export const Button = styled.button`
    color: black;
    cursor: pointer;
    background-color: blueviolet;
    padding: 8.5px;
    border: transparent;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 11px;
`