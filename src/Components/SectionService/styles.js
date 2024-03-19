import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    height: 965px;
    padding-top: 128px;

    position: relative;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`

export const DivLeft = styled.div`
    flex: 1;
    max-width: 594px;
`

export const Span = styled.span`
    display: block;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ec7000;
    margin-bottom: 35px;
`

export const H2 = styled.h2`
 color: #33303e;
 font-size: 56px;
 font-weight: bold;
 line-height: 61px;
 margin-bottom: 24px;
`

export const P = styled.p`
    font-size: 18px;
    max-width: 554px;
    margin-bottom: 68px;
    color: #4e4b59;
`
export const Li = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap:  36px;
    padding-bottom: 36px;
    border-bottom: 1px solid #7a7786;
`

export const DivMascara = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 36px;
`

export const DivRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 32%;
    height: 100%;
    background-color: #f4f4f4;

    display: flex;
    align-items: center;
`

export const Img = styled.img`
    transform: translateX(-50%);
`