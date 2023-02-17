import {IonContent, IonPage, IonRouterLink} from '@ionic/react';
import {TextElem} from "../common/text-elem";
import {ImageElem} from "../common/image-elem";
import NoteIcon from "../assets/svg/note-text.svg"
import {Toolbar} from "../common/layout-toolbar";
import {ItemWrapper} from "../common/item-wrapper";
import {Card} from '../common/card';
import {Stack} from "../common/stack";
import {ListLayout} from "../common/list-layout";
import {useQuery} from "react-query";
import React from "react";

export interface BillData {
  billId: number,
  transactionType: string,
  provider: string,
  privateAccount: number,
  paymentAmount: number,
  creationTime: string
}

const formatDate = (timestamp: string) => {
  console.log(timestamp)
  timestamp = timestamp.replaceAll("-", "/");
  timestamp = timestamp.replace("T", " ");
  timestamp = timestamp.slice(0, 16)
  return timestamp;
}

const Home = () => {
    const {data, isLoading} = useQuery('bills', async () => {
      const data = await fetch('http://localhost:3000/bill/list')
      const result = await data.json();
      console.log(result)
      return result;
    });

    return (
      <IonPage>
        <Toolbar>
          <ItemWrapper slot="start">
            <TextElem size={9} weight="bold" color="black" tid="bill.header.history"/>
          </ItemWrapper>
          <ItemWrapper slot="end">
            <IonRouterLink href="/create">
              <ImageElem src={NoteIcon} width={24} height={24}/>
            </IonRouterLink>
          </ItemWrapper>
        </Toolbar>
        <IonContent>
          <ListLayout>
            {isLoading ? <TextElem size={10} text="Loading..."/> :
              data.map((bill: BillData) => {
                return (<Card key={bill.billId}>
                  <Stack alignItems="start" justifyContent="none">
                    <TextElem size={9} text={bill.transactionType}/>
                  </Stack>
                  <Stack alignItems="end" justifyContent="space-between">
                    <TextElem color="secondary" size={7} text={formatDate(bill.creationTime)}/>
                    <TextElem size={10} text={String(bill.paymentAmount.toFixed(2))}/>
                  </Stack>
                </Card>)
              })
            }
          </ListLayout>
        </IonContent>
      </IonPage>
    );

  }
;

export default Home;
