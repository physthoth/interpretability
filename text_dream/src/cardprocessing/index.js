import React from 'react';

import Dream from '../components/cards/DreamComponent';
import Resemble from '../components/cards/ResembleComponent';
import Layers from '../components/cards/LayersComponent';
import Magnitudes from '../components/cards/MagnitudesComponent';
import ShiftedResembling from '../components/cards/ShiftedResemblingComponent';
import TopWordsComponent from '../components/cards/TopWordsComponent';
import SimilarEmbeddingsComponent from
    '../components/cards/SimilarEmbeddingsComponent';

export function getCard(dreamingElement, elementIndex) {
  var dreamingCard;
  switch (dreamingElement.type) {
    case "dream":
      dreamingCard = <Dream
          results={dreamingElement.results}
          params={dreamingElement.params}
          elementIndex={elementIndex}/>
      break;
    case "resemble":
      dreamingCard = <Resemble
          results={dreamingElement.results}
          params={dreamingElement.params}
          elementIndex={elementIndex}/>
      break;
    case "resemble_shifted":
      dreamingCard = <ShiftedResembling
          results={dreamingElement.results}
          params={dreamingElement.params}
          elementIndex={elementIndex}/>
      break;
    case "top_words":
      dreamingCard = <TopWordsComponent
          dreamingElement={dreamingElement}
          elementIndex={elementIndex}/>
      break;
    case "similar_embeddings":
      dreamingCard = <SimilarEmbeddingsComponent
          dreamingElement={dreamingElement}
          elementIndex={elementIndex}/>
      break;
    case "magnitudes":
      dreamingCard = <Magnitudes
          magnitudes={dreamingElement.magnitudes}
          elementIndex={elementIndex}/>
      break;
    case "layers":
      dreamingCard = <Layers
          layers={dreamingElement.layers}
          elementIndex={elementIndex}/>
      break;
    default:
      dreamingCard = <div></div>
  }
  return dreamingCard;
}
