import styled from 'styled-components';
import { font } from 'styled-theme';

import { Heading, Label, List, Link } from '../..';

const StyledHeading = styled(Heading)`
  align-self: center;
`;

const StyledLabel = styled(Label)`
  margin-top: 1rem;
  padding-left: 0.5rem;
`;

const ParagraphWrapper = styled.div`
  font-family: ${font('primary')};
  padding: 1rem 1.5rem 0rem;
`;

const StyledList = styled(List)`
  padding-left: 4rem;
`;

const ShopPolicies = () => {
  return (
    <>
      <StyledHeading>Shop policies</StyledHeading>
      <StyledLabel>Shipping Processing time</StyledLabel>
      <ParagraphWrapper>
        The time I need to prepare an order for shipping varies according to
        stock on hand, typically within a few business days. With made to order
        and custom items, I will get them shipped out within a few business days
        of completion. For details, see individual item listings. I will send
        you an email when your order has been shipped. I will not be able to
        ship an order until I have received payment.
      </ParagraphWrapper>
      <StyledLabel>Estimated shipping times</StyledLabel>
      <StyledList>
        <li>North America: 3-7 business days</li>
        <li>Europe: 12-20 business days</li>
        <li>Australia, New Zealand and Oceania: 14-24 business days</li>
      </StyledList>
      <ParagraphWrapper>
        I'll do my best to meet these shipping estimates, but cannot guarantee
        them. Actual delivery time will depend on the shipping method you
        choose.
      </ParagraphWrapper>
      <StyledLabel>Customs and import taxes</StyledLabel>
      <ParagraphWrapper>
        Buyers are responsible for any customs and import taxes that may apply.
        I'm not responsible for delays due to customs.
      </ParagraphWrapper>
      <StyledLabel>Returns and exchanges</StyledLabel>
      <ParagraphWrapper>
        I gladly accept returns, exchanges, and cancellations. I will supply you
        with a return address. Delayed shipping is a subject of 10% re-stocking
        fee.
      </ParagraphWrapper>
      <StyledList>
        <li>Contact me within: 3 days of delivery</li>
        <li>Ship items back within: 7 days of delivery</li>
        <li>Request a cancellation within: 12 hours of purchase</li>
      </StyledList>
      <ParagraphWrapper>
        If you wish to cancel your order, please request a cancellation within
        12 hours of purchase.
      </ParagraphWrapper>
      <StyledLabel>
        The following items can't be returned or exchanged
      </StyledLabel>
      <ParagraphWrapper>
        Because of the nature of these items, unless they arrive damaged or
        defective, I can't accept returns for custom or personalized orders
        (i.e. orders with personalization).
      </ParagraphWrapper>
      <StyledLabel>Conditions of return</StyledLabel>
      <ParagraphWrapper>
        Buyers are responsible for return shipping costs. If the item is not
        returned in its original condition, the buyer is responsible for any
        loss in value.
      </ParagraphWrapper>
      <StyledLabel>Questions about your order?</StyledLabel>
      <ParagraphWrapper>
        Please <Link to='/contact'>contact me</Link> if you have any problems
        with your order, I am more than happy to help you. I take pride in my
        work and stand behind it. If you are not satisfied with your jewelry
        piece, you can return it for a full refund (minus the shipping charge).
      </ParagraphWrapper>
    </>
  );
};

export default ShopPolicies;
