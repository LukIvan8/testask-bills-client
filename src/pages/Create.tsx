import React from 'react';
import {IonContent, IonItem, IonPage, IonRouterLink} from "@ionic/react";
import {ImageElem} from "../common/image-elem";
import ChevronLeft from "../assets/svg/chevron-left.svg"
import styled from "styled-components";
import {Toolbar} from "../common/layout-toolbar";
import {TextElem} from "../common/text-elem";
import {ItemWrapper} from "../common/item-wrapper";
import {ListLayout} from "../common/list-layout";
import {useMutation} from "react-query";
import {BillData} from "./Home";
import {BillForm} from "../epic/bill-create-form";
import {StyledIonPage} from "../theme/global.styled";

const BackButton = styled(IonItem)`
  --ion-item-background: #2C2C2C;
  border-radius: 0px 10px 10px 0px;
  --padding-start: 5px;
`



const createNewItem = async (newBill: BillData) => {
  const response = await fetch('https://testask-bills-api.herokuapp.com/bill/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBill)
  });
}

const Create = () => {
  const {mutate, status} = useMutation(createNewItem)

  const handleSubmit = async (newBill: BillData) => {
    console.log("New Bill" + newBill)
    await mutate(newBill);
  };

  return (
    <StyledIonPage>
      <Toolbar>
        <BackButton slot="start">
          <IonRouterLink href="/">
            <ImageElem src={ChevronLeft}/>
          </IonRouterLink>
        </BackButton>
        <ItemWrapper slot="">
          <TextElem weight="bold" size={9} tid="bill.header.create"/>
        </ItemWrapper>
      </Toolbar>
      <IonContent>
        <ListLayout gap={1.625}>
          <BillForm submit={handleSubmit}/>
        </ListLayout>


      </IonContent>
    </StyledIonPage>
  );
}


export default Create;