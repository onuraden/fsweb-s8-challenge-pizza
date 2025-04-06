import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    width: 33.25rem;
    top: 22.688rem;
    left: 43.438rem;
    
`
const PizzaExp = styled.p`
    font-family: Barlow, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #5F5F5F;
    line-height: 1.8rem;
`

const Baslik = styled.p`
    font-family: Barlow, sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    color: #292929;
`
const Yildiz =styled.span`
    color: #D80027;
`

const Secimler = styled.div`
    display: flex;
    
    
`
const Boyut = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Hamur = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    left: 16.805rem;
`

const Aciklama = styled.p`
    font-family: Barlow, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #5F5F5F;

`


function OrderForm() {
  return (
    <Container>
        <PizzaExp> Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel 
            olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş 
            mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen 
            pizzetta denir.
        </PizzaExp>
        <Secimler>
            <Boyut>
                <Baslik>Boyut Seç <Yildiz>*</Yildiz></Baslik>
                <label>
                    <input type="radio"  name="boyutSecimi" value="kucuk" />
                    Küçük 
                </label>
                <label>
                    <input type="radio"  name="boyutSecimi" value="orta" />
                    Orta 
                </label>
                <label>
                    <input type="radio"  name="boyutSecimi" value="buyuk" />
                    Büyük 
                </label>  
            </Boyut>
            <Hamur>
                <Baslik>Hamur Seç <Yildiz>*</Yildiz></Baslik>
                <select name="hamurSecimi" >
                    <option value="ince">İnce</option>
                    <option value="kalin">Kalın</option>
                </select>
            </Hamur>
        </Secimler>
            <div>
            <Baslik>Ek malzemeler</Baslik>
            <Aciklama>En Fazla 10 malzeme seçebilirsiniz. 5₺</Aciklama>
            <Form>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>
                    Pepperoni
                    </Label>
                </FormGroup>
                <FormGroup
                    check
                    inline
                >
                    <Input type="checkbox" />
                    <Label check>
                    Tavuk Izgara
                    </Label>
                </FormGroup>
            </Form>
            </div>
            
    </Container>
  )
}

export default OrderForm