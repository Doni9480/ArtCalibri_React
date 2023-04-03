import React, { Component } from 'react'
import TitleBlock from '../../components/block_titlle/title_block'

export default class Contacts extends Component {
   render() {
      return (
         <>
            <TitleBlock text={'Контакты'} isPageTitle={true}/>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br />
            <div className="block-footer__tell" style={{'fontSize': "30px", 'fontWeight': "400"}}>+7 956 46 578 96</div>
            <div className="block-footer__tell" style={{'fontSize': "30px", 'fontWeight': "400"}}>+7 789 43 45 78</div>
            <div className="block-footer__tell" style={{'fontSize': "30px", 'fontWight': "400"}}>+7 567 36 67 90</div>
         </>
      )
   }
}
