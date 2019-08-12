/**
 *
 * TomoWallet - My Wallet Page - Porfolio Table - Styles
 *
 */
// ===== IMPORTS =====
// Modules
import styled from 'styled-components';
// ===================

// ===== STYLE =====
const TokenCellStyler = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .block-symbol {
    flex: 0 1 auto;
  }
  .block-token {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    .block-token__name {
      flex: 0 1 auto;
    }
    .block-token__publisher {
      flex: 0 1 auto;
    }
  }
`;
// =================

export { TokenCellStyler };