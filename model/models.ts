import { AxiosRequestConfig } from 'axios';
import {ReadStream} from "fs";

export * from './aBTestSendStrategy';
export * from './aPIJobErrorPayload';
export * from './aPIMethodFilter';
export * from './abTestAction';
export * from './abTestActionData';
export * from './abTestActionDataCurrentExperiment';
export * from './abTestActionDataMainAction';
export * from './accountEnum';
export * from './accountResponseObjectResource';
export * from './accountResponseObjectResourceAttributes';
export * from './actionOutputCondition';
export * from './actionOutputConditionConditionGroup';
export * from './actionOutputConditionFilter';
export * from './actionOutputConditionFilter2';
export * from './actionOutputSplitAction';
export * from './actionOutputSplitActionData';
export * from './additionalField';
export * from './afterCloseTimeout';
export * from './afterCloseTimeoutProperties';
export * from './ageGate';
export * from './ageGateProperties';
export * from './ageGateStyles';
export * from './alltimeDateFilter';
export * from './anniversaryDateFilter';
export * from './attributionEnum';
export * from './attributionResponseObjectResource';
export * from './attributionResponseObjectResourceRelationships';
export * from './attributionResponseObjectResourceRelationshipsAttributedEvent';
export * from './attributionResponseObjectResourceRelationshipsAttributedEventData';
export * from './attributionResponseObjectResourceRelationshipsCampaign';
export * from './attributionResponseObjectResourceRelationshipsCampaignData';
export * from './attributionResponseObjectResourceRelationshipsCampaignMessage';
export * from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
export * from './attributionResponseObjectResourceRelationshipsEvent';
export * from './attributionResponseObjectResourceRelationshipsEventData';
export * from './attributionResponseObjectResourceRelationshipsFlow';
export * from './attributionResponseObjectResourceRelationshipsFlowData';
export * from './attributionResponseObjectResourceRelationshipsFlowMessage';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageData';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
export * from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
export * from './audiences';
export * from './audiencesUpdate';
export * from './automaticWinnerSelectionSettings';
export * from './backInStock';
export * from './backInStockDelayAction';
export * from './backInStockDynamicButtonBorderStyles';
export * from './backInStockDynamicButtonData';
export * from './backInStockDynamicButtonDropShadowStyles';
export * from './backInStockDynamicButtonStyles';
export * from './backInStockDynamicButtonTextStyles';
export * from './backInStockEmailConsentCheckbox';
export * from './backInStockEmailConsentCheckboxProperties';
export * from './backInStockEmailConsentCheckboxStyles';
export * from './backInStockMethodFilter';
export * from './backInStockProperties';
export * from './backInStockSubscriptionEnum';
export * from './backgroundImage';
export * from './backgroundImageStyles';
export * from './bannerStyles';
export * from './baseEventCreateQueryBulkEntryResourceObject';
export * from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
export * from './baseStyle';
export * from './baseStyleProperties';
export * from './baseStyleStyles';
export * from './blockDisplayOptions';
export * from './body';
export * from './bodyProperties';
export * from './bodyStyles';
export * from './booleanBranchLinks';
export * from './booleanFilter';
export * from './borderStyle';
export * from './bounceDateFilter';
export * from './bounceDateFilterFilter';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResource';
export * from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
export * from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
export * from './bulkRemoveMethodFilter';
export * from './button';
export * from './buttonAction';
export * from './buttonBlockData';
export * from './buttonBlockProperties';
export * from './buttonBlockStyles';
export * from './buttonBlockV0';
export * from './buttonBlockV1';
export * from './buttonDropShadowStyles';
export * from './buttonProperties';
export * from './buttonStyles';
export * from './calendarDateFilter';
export * from './campaignCloneQuery';
export * from './campaignCloneQueryResourceObject';
export * from './campaignCloneQueryResourceObjectAttributes';
export * from './campaignCreateQuery';
export * from './campaignCreateQueryResourceObject';
export * from './campaignCreateQueryResourceObjectAttributes';
export * from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
export * from './campaignCreateQueryResourceObjectAttributesSendOptions';
export * from './campaignCreateQueryResourceObjectAttributesSendStrategy';
export * from './campaignEnum';
export * from './campaignMessageAssignTemplateQuery';
export * from './campaignMessageAssignTemplateQueryResourceObject';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
export * from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
export * from './campaignMessageCreateQueryResourceObject';
export * from './campaignMessageCreateQueryResourceObjectAttributes';
export * from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
export * from './campaignMessageCreateQueryResourceObjectRelationships';
export * from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
export * from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
export * from './campaignMessageEnum';
export * from './campaignMessageImageUpdateQuery';
export * from './campaignMessageImageUpdateQueryData';
export * from './campaignMessageIncrement';
export * from './campaignMessagePartialUpdateQuery';
export * from './campaignMessagePartialUpdateQueryResourceObject';
export * from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
export * from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
export * from './campaignMessageProperty';
export * from './campaignMessageResponseObjectResource';
export * from './campaignMessageResponseObjectResourceAttributes';
export * from './campaignMessageResponseObjectResourceAttributesDefinition';
export * from './campaignMessageStaticCount';
export * from './campaignPartialUpdateQuery';
export * from './campaignPartialUpdateQueryResourceObject';
export * from './campaignPartialUpdateQueryResourceObjectAttributes';
export * from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
export * from './campaignRecipientEstimationEnum';
export * from './campaignRecipientEstimationJobCreateQuery';
export * from './campaignRecipientEstimationJobCreateQueryResourceObject';
export * from './campaignRecipientEstimationJobEnum';
export * from './campaignRecipientEstimationJobResponseObjectResource';
export * from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
export * from './campaignRecipientEstimationResponseObjectResource';
export * from './campaignRecipientEstimationResponseObjectResourceAttributes';
export * from './campaignResponseObjectResource';
export * from './campaignResponseObjectResourceAttributes';
export * from './campaignResponseObjectResourceAttributesSendOptions';
export * from './campaignResponseObjectResourceAttributesSendStrategy';
export * from './campaignResponseObjectResourceAttributesTrackingOptions';
export * from './campaignSendJobCreateQuery';
export * from './campaignSendJobCreateQueryResourceObject';
export * from './campaignSendJobEnum';
export * from './campaignSendJobPartialUpdateQuery';
export * from './campaignSendJobPartialUpdateQueryResourceObject';
export * from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
export * from './campaignSendJobResponseObjectResource';
export * from './campaignSendJobResponseObjectResourceAttributes';
export * from './campaignTrackingSettingDynamicParam';
export * from './campaignTrackingSettingStaticParam';
export * from './campaignValuesReportEnum';
export * from './campaignValuesRequestDTO';
export * from './campaignValuesRequestDTOResourceObject';
export * from './campaignValuesRequestDTOResourceObjectAttributes';
export * from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
export * from './campaignsEmailTrackingOptions';
export * from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
export * from './campaignsSMSTrackingOptions';
export * from './carrierDeactivationMethodFilter';
export * from './cartItemCount';
export * from './cartItemCountProperties';
export * from './cartProduct';
export * from './cartProductProperties';
export * from './cartValue';
export * from './cartValueProperties';
export * from './catalogCategoryBulkCreateJobEnum';
export * from './catalogCategoryBulkDeleteJobEnum';
export * from './catalogCategoryBulkUpdateJobEnum';
export * from './catalogCategoryCreateJobCreateQuery';
export * from './catalogCategoryCreateJobCreateQueryResourceObject';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryCreateJobResponseObjectResource';
export * from './catalogCategoryCreateQuery';
export * from './catalogCategoryCreateQueryResourceObject';
export * from './catalogCategoryCreateQueryResourceObjectAttributes';
export * from './catalogCategoryCreateQueryResourceObjectRelationships';
export * from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
export * from './catalogCategoryDeleteJobCreateQuery';
export * from './catalogCategoryDeleteJobCreateQueryResourceObject';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryDeleteJobResponseObjectResource';
export * from './catalogCategoryDeleteQueryResourceObject';
export * from './catalogCategoryEnum';
export * from './catalogCategoryItemOp';
export * from './catalogCategoryItemOpDataInner';
export * from './catalogCategoryResponseObjectResource';
export * from './catalogCategoryResponseObjectResourceAttributes';
export * from './catalogCategoryUpdateJobCreateQuery';
export * from './catalogCategoryUpdateJobCreateQueryResourceObject';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
export * from './catalogCategoryUpdateJobResponseObjectResource';
export * from './catalogCategoryUpdateQuery';
export * from './catalogCategoryUpdateQueryResourceObject';
export * from './catalogCategoryUpdateQueryResourceObjectAttributes';
export * from './catalogItemBulkCreateJobEnum';
export * from './catalogItemBulkDeleteJobEnum';
export * from './catalogItemBulkUpdateJobEnum';
export * from './catalogItemCategoryOp';
export * from './catalogItemCreateJobCreateQuery';
export * from './catalogItemCreateJobCreateQueryResourceObject';
export * from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemCreateJobResponseObjectResource';
export * from './catalogItemCreateQuery';
export * from './catalogItemCreateQueryResourceObject';
export * from './catalogItemCreateQueryResourceObjectAttributes';
export * from './catalogItemCreateQueryResourceObjectRelationships';
export * from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
export * from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
export * from './catalogItemDeleteJobCreateQuery';
export * from './catalogItemDeleteJobCreateQueryResourceObject';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemDeleteJobResponseObjectResource';
export * from './catalogItemDeleteQueryResourceObject';
export * from './catalogItemEnum';
export * from './catalogItemResponseObjectResource';
export * from './catalogItemResponseObjectResourceAttributes';
export * from './catalogItemUpdateJobCreateQuery';
export * from './catalogItemUpdateJobCreateQueryResourceObject';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
export * from './catalogItemUpdateJobResponseObjectResource';
export * from './catalogItemUpdateQuery';
export * from './catalogItemUpdateQueryResourceObject';
export * from './catalogItemUpdateQueryResourceObjectAttributes';
export * from './catalogVariantBulkCreateJobEnum';
export * from './catalogVariantBulkDeleteJobEnum';
export * from './catalogVariantBulkUpdateJobEnum';
export * from './catalogVariantCreateJobCreateQuery';
export * from './catalogVariantCreateJobCreateQueryResourceObject';
export * from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantCreateJobResponseObjectResource';
export * from './catalogVariantCreateQuery';
export * from './catalogVariantCreateQueryResourceObject';
export * from './catalogVariantCreateQueryResourceObjectAttributes';
export * from './catalogVariantCreateQueryResourceObjectRelationships';
export * from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
export * from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
export * from './catalogVariantDeleteJobCreateQuery';
export * from './catalogVariantDeleteJobCreateQueryResourceObject';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantDeleteJobResponseObjectResource';
export * from './catalogVariantDeleteQueryResourceObject';
export * from './catalogVariantEnum';
export * from './catalogVariantResponseObjectResource';
export * from './catalogVariantResponseObjectResourceAttributes';
export * from './catalogVariantUpdateJobCreateQuery';
export * from './catalogVariantUpdateJobCreateQueryResourceObject';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
export * from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
export * from './catalogVariantUpdateJobResponseObjectResource';
export * from './catalogVariantUpdateQuery';
export * from './catalogVariantUpdateQueryResourceObject';
export * from './catalogVariantUpdateQueryResourceObjectAttributes';
export * from './channel';
export * from './channelProperties';
export * from './channelSettings';
export * from './checkboxes';
export * from './checkboxesProperties';
export * from './checkboxesStyles';
export * from './checkoutMethodFilter';
export * from './close';
export * from './closeButtonStyle';
export * from './closeProperties';
export * from './codeAction';
export * from './collectionLinks';
export * from './columnStyles';
export * from './columnV0';
export * from './columnV1';
export * from './columnV1BlocksInner';
export * from './conditionGroup';
export * from './conditionGroupConditionsInner';
export * from './conditionalBranchAction';
export * from './conditionalBranchActionData';
export * from './conditionalBranchActionDataProfileFilter';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
export * from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
export * from './constantContactIntegrationFilter';
export * from './constantContactIntegrationMethodFilter';
export * from './contactInformation';
export * from './contentExperimentAction';
export * from './contentRepeatV0';
export * from './contentRepeatV1';
export * from './conversationEnum';
export * from './conversationMessageCreateQuery';
export * from './conversationMessageCreateQueryResourceObject';
export * from './conversationMessageCreateQueryResourceObjectAttributes';
export * from './conversationMessageCreateQueryResourceObjectRelationships';
export * from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
export * from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
export * from './conversationMessageEnum';
export * from './conversationResponseObjectResource';
export * from './countdownDelayAction';
export * from './countdownDelayActionData';
export * from './countdownTimer';
export * from './countdownTimerProperties';
export * from './countdownTimerPropertiesConfiguration';
export * from './countdownTimerStyles';
export * from './coupon';
export * from './couponBlockData';
export * from './couponBlockProperties';
export * from './couponBlockStyles';
export * from './couponBlockV0';
export * from './couponBlockV1';
export * from './couponCodeBulkCreateJobEnum';
export * from './couponCodeCreateJobCreateQuery';
export * from './couponCodeCreateJobCreateQueryResourceObject';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
export * from './couponCodeCreateJobResponseObjectResource';
export * from './couponCodeCreateJobResponseObjectResourceAttributes';
export * from './couponCodeCreateQuery';
export * from './couponCodeCreateQueryResourceObject';
export * from './couponCodeCreateQueryResourceObjectAttributes';
export * from './couponCodeCreateQueryResourceObjectRelationships';
export * from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
export * from './couponCodeEnum';
export * from './couponCodeResponseObjectResource';
export * from './couponCodeResponseObjectResourceAttributes';
export * from './couponCodeUpdateQuery';
export * from './couponCodeUpdateQueryResourceObject';
export * from './couponCodeUpdateQueryResourceObjectAttributes';
export * from './couponCreateQuery';
export * from './couponCreateQueryResourceObject';
export * from './couponEnum';
export * from './couponProperties';
export * from './couponPropertiesCoupon';
export * from './couponResponseObjectResource';
export * from './couponResponseObjectResourceAttributes';
export * from './couponStyles';
export * from './couponUpdateQuery';
export * from './couponUpdateQueryResourceObject';
export * from './couponUpdateQueryResourceObjectAttributes';
export * from './customJavascript';
export * from './customMetricCondition';
export * from './customMetricConditionFilter';
export * from './customMetricCreateQuery';
export * from './customMetricCreateQueryResourceObject';
export * from './customMetricCreateQueryResourceObjectAttributes';
export * from './customMetricDefinition';
export * from './customMetricEnum';
export * from './customMetricGroup';
export * from './customMetricPartialUpdateQuery';
export * from './customMetricPartialUpdateQueryResourceObject';
export * from './customMetricPartialUpdateQueryResourceObjectAttributes';
export * from './customMetricResponseObjectResource';
export * from './customMetricResponseObjectResourceAttributes';
export * from './customObjectPropertyCondition';
export * from './customObjectPropertyConditionFilter';
export * from './customObjectTriggerCondition';
export * from './customObjectTriggerConditionFilter';
export * from './customSourceFilter';
export * from './customTimeframe';
export * from './customTrackingParamDTO';
export * from './dataPrivacyCreateDeletionJobQuery';
export * from './dataPrivacyCreateDeletionJobQueryResourceObject';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
export * from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
export * from './dataPrivacyDeletionJobEnum';
export * from './dataPrivacyProfileQueryResourceObject';
export * from './dataPrivacyProfileQueryResourceObjectAttributes';
export * from './dataSourceCreateQuery';
export * from './dataSourceCreateQueryResourceObject';
export * from './dataSourceCreateQueryResourceObjectAttributes';
export * from './dataSourceEnum';
export * from './dataSourceRecordBulkCreateJobCreateQuery';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
export * from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
export * from './dataSourceRecordBulkCreateJobEnum';
export * from './dataSourceRecordCreateJobCreateQuery';
export * from './dataSourceRecordCreateJobCreateQueryResourceObject';
export * from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
export * from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
export * from './dataSourceRecordCreateJobEnum';
export * from './dataSourceRecordEnum';
export * from './dataSourceRecordResourceObject';
export * from './dataSourceRecordResourceObjectAttributes';
export * from './dataSourceResponseObjectResource';
export * from './dataSourceResponseObjectResourceAttributes';
export * from './dataWarehouseImportMethodFilter';
export * from './dateProperties';
export * from './dateStyles';
export * from './delay';
export * from './delayProperties';
export * from './deleteTagGroupResponse';
export * from './device';
export * from './deviceMetadata';
export * from './deviceProperties';
export * from './displayOptions';
export * from './doubleOptinFilter';
export * from './dropShadow';
export * from './dropShadowBlockData';
export * from './dropShadowBlockStyles';
export * from './dropShadowBlockV0';
export * from './dropShadowBlockV1';
export * from './dropdown';
export * from './dropdownProperties';
export * from './dropdownStyles';
export * from './dynamicButton';
export * from './dynamicImageBlockProperties';
export * from './dynamicProductBlockProperties';
export * from './dynamicReviewBlockProperties';
export * from './dynamicTableBlockProperties';
export * from './dynamicTrackingParam';
export * from './effectiveDateFilter';
export * from './email';
export * from './emailChannel';
export * from './emailContent';
export * from './emailContentSubObject';
export * from './emailMarketing';
export * from './emailMarketingListSuppression';
export * from './emailMarketingSuppression';
export * from './emailMessageDefinition';
export * from './emailProperties';
export * from './emailSendOptions';
export * from './emailStyles';
export * from './emailSubscriptionParameters';
export * from './emailUnsubscriptionParameters';
export * from './encodedFormResponseObjectResource';
export * from './encodedFormResponseObjectResourceAttributes';
export * from './equalsStringFilter';
export * from './errorMessages';
export * from './errorSource';
export * from './eventBulkCreateEnum';
export * from './eventBulkCreateJobEnum';
export * from './eventCreateQueryV2';
export * from './eventCreateQueryV2ResourceObject';
export * from './eventCreateQueryV2ResourceObjectAttributes';
export * from './eventCreateQueryV2ResourceObjectAttributesMetric';
export * from './eventCreateQueryV2ResourceObjectAttributesProfile';
export * from './eventEnum';
export * from './eventProfileCreateQueryResourceObject';
export * from './eventProfileCreateQueryResourceObjectAttributes';
export * from './eventResponseObjectResource';
export * from './eventResponseObjectResourceAttributes';
export * from './eventsBulkCreateJob';
export * from './eventsBulkCreateJobResourceObject';
export * from './eventsBulkCreateJobResourceObjectAttributes';
export * from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
export * from './eventsBulkCreateQueryResourceObject';
export * from './eventsBulkCreateQueryResourceObjectAttributes';
export * from './eventsBulkCreateQueryResourceObjectAttributesEvents';
export * from './eventsBulkCreateQueryResourceObjectAttributesProfile';
export * from './existenceOperatorExistenceFilter';
export * from './exitIntent';
export * from './explicitlyReachable';
export * from './explicitlyReachableFiltersInner';
export * from './explicitlyUnreachable';
export * from './failedAgeGateMethodFilter';
export * from './fixedTimerConfiguration';
export * from './flowActionEncodedResponseObjectResource';
export * from './flowActionEncodedResponseObjectResourceAttributes';
export * from './flowActionEncodedResponseObjectResourceAttributesDefinition';
export * from './flowActionEnum';
export * from './flowActionUpdateQuery';
export * from './flowActionUpdateQueryResourceObject';
export * from './flowActionUpdateQueryResourceObjectAttributes';
export * from './flowActionUpdateQueryResourceObjectAttributesDefinition';
export * from './flowCreateQuery';
export * from './flowCreateQueryResourceObject';
export * from './flowCreateQueryResourceObjectAttributes';
export * from './flowDefinition';
export * from './flowDefinitionActionsInner';
export * from './flowDefinitionProfileFilter';
export * from './flowDefinitionProfileFilterConditionGroupsInner';
export * from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
export * from './flowDefinitionTriggersInner';
export * from './flowEmail';
export * from './flowEmailAdditionalFilters';
export * from './flowEmailAdditionalFiltersConditionGroupsInner';
export * from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowEnum';
export * from './flowInternalAlert';
export * from './flowMessageEncodedResponseObjectResource';
export * from './flowMessageEncodedResponseObjectResourceAttributes';
export * from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
export * from './flowMessageEnum';
export * from './flowPushNotification';
export * from './flowPushNotificationAdditionalFilters';
export * from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
export * from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowPushNotificationBadgeOptions';
export * from './flowResponseObjectResource';
export * from './flowResponseObjectResourceAttributes';
export * from './flowSeriesReportEnum';
export * from './flowSeriesRequestDTO';
export * from './flowSeriesRequestDTOResourceObject';
export * from './flowSeriesRequestDTOResourceObjectAttributes';
export * from './flowSms';
export * from './flowSmsAdditionalFilters';
export * from './flowSmsAdditionalFiltersConditionGroupsInner';
export * from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
export * from './flowTrackingSettingDynamicParam';
export * from './flowTrackingSettingStaticParam';
export * from './flowUpdateQuery';
export * from './flowUpdateQueryResourceObject';
export * from './flowUpdateQueryResourceObjectAttributes';
export * from './flowV2ResponseObjectResourceAttributes';
export * from './flowV2ResponseObjectResourceExtended';
export * from './flowV2ResponseObjectResourceExtendedAttributes';
export * from './flowValuesReportEnum';
export * from './flowValuesRequestDTO';
export * from './flowValuesRequestDTOResourceObject';
export * from './flowValuesRequestDTOResourceObjectAttributes';
export * from './flowWebhook';
export * from './flowWhatsApp';
export * from './flowsProfileMetricCondition';
export * from './flowsProfileMetricConditionTimeframeFilter';
export * from './formCreateQuery';
export * from './formCreateQueryResourceObject';
export * from './formCreateQueryResourceObjectAttributes';
export * from './formDefinition';
export * from './formEnum';
export * from './formMethodFilter';
export * from './formResponseObjectResource';
export * from './formResponseObjectResourceAttributes';
export * from './formSeriesReportEnum';
export * from './formSeriesRequestDTO';
export * from './formSeriesRequestDTOResourceObject';
export * from './formSeriesRequestDTOResourceObjectAttributes';
export * from './formSubscribeFilter';
export * from './formValuesReportEnum';
export * from './formValuesRequestDTO';
export * from './formValuesRequestDTOResourceObject';
export * from './formValuesRequestDTOResourceObjectAttributes';
export * from './formVersionABTest';
export * from './formVersionEnum';
export * from './formVersionResponseObjectResource';
export * from './formVersionResponseObjectResourceAttributes';
export * from './getAccountResponse';
export * from './getAccountResponseCollection';
export * from './getAccounts4XXResponse';
export * from './getAccounts4XXResponseErrorsInner';
export * from './getAccounts4XXResponseErrorsInnerSource';
export * from './getBulkProfileSuppressionsCreateJobResponse';
export * from './getBulkProfileSuppressionsCreateJobResponseCollection';
export * from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
export * from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
export * from './getBulkProfileSuppressionsRemoveJobResponse';
export * from './getBulkProfileSuppressionsRemoveJobResponseCollection';
export * from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
export * from './getCampaignMessageCampaignRelationshipResponse';
export * from './getCampaignMessageCampaignRelationshipResponseData';
export * from './getCampaignMessageImageRelationshipResponse';
export * from './getCampaignMessageImageRelationshipResponseData';
export * from './getCampaignMessageResponseCollectionCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocument';
export * from './getCampaignMessageResponseCompoundDocumentData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export * from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
export * from './getCampaignMessageResponseCompoundDocumentIncludedInner';
export * from './getCampaignMessageTemplateRelationshipResponse';
export * from './getCampaignMessagesRelationshipsResponseCollection';
export * from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
export * from './getCampaignRecipientEstimationJobResponse';
export * from './getCampaignRecipientEstimationResponse';
export * from './getCampaignResponse';
export * from './getCampaignResponseCollectionCompoundDocument';
export * from './getCampaignResponseCollectionCompoundDocumentDataInner';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
export * from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
export * from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
export * from './getCampaignResponseCompoundDocument';
export * from './getCampaignResponseData';
export * from './getCampaignResponseDataAllOfRelationships';
export * from './getCampaignSendJobResponse';
export * from './getCampaignTagsRelationshipsResponseCollection';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
export * from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
export * from './getCatalogCategoryCreateJobResponseCompoundDocument';
export * from './getCatalogCategoryDeleteJobResponse';
export * from './getCatalogCategoryDeleteJobResponseCollection';
export * from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
export * from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogCategoryItemsRelationshipsResponseCollection';
export * from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
export * from './getCatalogCategoryResponse';
export * from './getCatalogCategoryResponseCollection';
export * from './getCatalogCategoryResponseCollectionDataInner';
export * from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
export * from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
export * from './getCatalogCategoryUpdateJobResponseCompoundDocument';
export * from './getCatalogItemCategoriesRelationshipsResponseCollection';
export * from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
export * from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
export * from './getCatalogItemCreateJobResponseCompoundDocument';
export * from './getCatalogItemDeleteJobResponse';
export * from './getCatalogItemDeleteJobResponseCollection';
export * from './getCatalogItemDeleteJobResponseCollectionDataInner';
export * from './getCatalogItemResponseCollectionCompoundDocument';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogItemResponseCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
export * from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
export * from './getCatalogItemUpdateJobResponseCompoundDocument';
export * from './getCatalogItemVariantsRelationshipsResponseCollection';
export * from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogVariantCreateJobResponseCompoundDocument';
export * from './getCatalogVariantDeleteJobResponse';
export * from './getCatalogVariantDeleteJobResponseCollection';
export * from './getCatalogVariantDeleteJobResponseCollectionDataInner';
export * from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogVariantResponse';
export * from './getCatalogVariantResponseCollection';
export * from './getCatalogVariantResponseCollectionDataInner';
export * from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
export * from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
export * from './getCatalogVariantUpdateJobResponseCompoundDocument';
export * from './getConversationResponse';
export * from './getConversationResponseData';
export * from './getCouponCodeCouponRelationshipResponse';
export * from './getCouponCodeCouponRelationshipResponseData';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
export * from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
export * from './getCouponCodeCreateJobResponseCompoundDocument';
export * from './getCouponCodeResponseCollection';
export * from './getCouponCodeResponseCollectionCompoundDocument';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
export * from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getCouponCodeResponseCollectionDataInner';
export * from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
export * from './getCouponCodeResponseCompoundDocument';
export * from './getCouponCodesRelationshipsResponseCollection';
export * from './getCouponCodesRelationshipsResponseCollectionDataInner';
export * from './getCouponResponse';
export * from './getCouponResponseCollection';
export * from './getCustomMetricMetricsRelationshipsResponseCollection';
export * from './getCustomMetricResponse';
export * from './getCustomMetricResponseCollectionCompoundDocument';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
export * from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
export * from './getCustomMetricResponseCompoundDocument';
export * from './getCustomMetricResponseData';
export * from './getCustomMetricResponseDataAllOfRelationships';
export * from './getDataSourceResponse';
export * from './getDataSourceResponseCollection';
export * from './getEncodedFormResponse';
export * from './getEventMetricRelationshipResponse';
export * from './getEventProfileRelationshipResponse';
export * from './getEventProfileRelationshipResponseData';
export * from './getEventResponseCollectionCompoundDocument';
export * from './getEventResponseCollectionCompoundDocumentDataInner';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
export * from './getEventResponseCollectionCompoundDocumentIncludedInner';
export * from './getEventResponseCompoundDocument';
export * from './getFlowActionEncodedResponse';
export * from './getFlowActionEncodedResponseCollection';
export * from './getFlowActionEncodedResponseCollectionDataInner';
export * from './getFlowActionEncodedResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowActionEncodedResponseCompoundDocument';
export * from './getFlowActionEncodedResponseCompoundDocumentData';
export * from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships';
export * from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow';
export * from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
export * from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
export * from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
export * from './getFlowActionFlowMessageRelationshipResponseCollection';
export * from './getFlowActionFlowRelationshipResponse';
export * from './getFlowFlowActionRelationshipListResponseCollection';
export * from './getFlowMessageActionRelationshipResponse';
export * from './getFlowMessageEncodedResponseCollection';
export * from './getFlowMessageEncodedResponseCollectionDataInner';
export * from './getFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowMessageEncodedResponseCompoundDocument';
export * from './getFlowMessageEncodedResponseCompoundDocumentData';
export * from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships';
export * from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
export * from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate';
export * from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
export * from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
export * from './getFlowMessageTemplateRelationshipResponse';
export * from './getFlowMessageTemplateRelationshipResponseData';
export * from './getFlowResponse';
export * from './getFlowResponseCollection';
export * from './getFlowResponseCollectionCompoundDocument';
export * from './getFlowResponseCollectionCompoundDocumentDataInner';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
export * from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
export * from './getFlowResponseCollectionCompoundDocumentIncludedInner';
export * from './getFlowResponseCollectionDataInner';
export * from './getFlowResponseCollectionDataInnerAllOfRelationships';
export * from './getFlowTagsRelationshipsResponseCollection';
export * from './getFlowV2ResponseCompoundDocument';
export * from './getFlowV2ResponseCompoundDocumentData';
export * from './getFormResponse';
export * from './getFormResponseCollection';
export * from './getFormResponseCollectionDataInner';
export * from './getFormResponseCollectionDataInnerAllOfRelationships';
export * from './getFormVersionFormRelationshipResponse';
export * from './getFormVersionFormRelationshipResponseData';
export * from './getFormVersionResponse';
export * from './getFormVersionResponseCollection';
export * from './getFormVersionsRelationshipsResponseCollection';
export * from './getFormVersionsRelationshipsResponseCollectionDataInner';
export * from './getImageResponse';
export * from './getImageResponseCollection';
export * from './getImportErrorResponseCollection';
export * from './getListFlowTriggersRelationshipsResponseCollection';
export * from './getListListResponseCollectionCompoundDocument';
export * from './getListListResponseCollectionCompoundDocumentDataInner';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
export * from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
export * from './getListListResponseCollectionCompoundDocumentIncludedInner';
export * from './getListMemberResponseCollection';
export * from './getListMemberResponseCollectionDataInner';
export * from './getListProfilesRelationshipsResponseCollection';
export * from './getListResponseCollection';
export * from './getListResponseCollectionDataInner';
export * from './getListResponseCollectionDataInnerAllOfRelationships';
export * from './getListRetrieveResponseCompoundDocument';
export * from './getListRetrieveResponseCompoundDocumentData';
export * from './getListTagsRelationshipsResponseCollection';
export * from './getListTagsRelationshipsResponseCollectionDataInner';
export * from './getMappedMetricCustomMetricRelationshipResponse';
export * from './getMappedMetricCustomMetricRelationshipResponseData';
export * from './getMappedMetricMetricRelationshipResponse';
export * from './getMappedMetricResponseCollectionCompoundDocument';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
export * from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
export * from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
export * from './getMappedMetricResponseCompoundDocument';
export * from './getMetricFlowTriggersRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollection';
export * from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
export * from './getMetricPropertyMetricRelationshipResponse';
export * from './getMetricPropertyResponseCollection';
export * from './getMetricPropertyResponseCollectionDataInner';
export * from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
export * from './getMetricPropertyResponseCompoundDocument';
export * from './getMetricPropertyResponseCompoundDocumentData';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
export * from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
export * from './getMetricResponse';
export * from './getMetricResponseCollection';
export * from './getMetricResponseCollectionCompoundDocument';
export * from './getMetricResponseCollectionCompoundDocumentDataInner';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
export * from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
export * from './getMetricResponseCompoundDocument';
export * from './getMetricResponseData';
export * from './getMetricResponseDataAllOfRelationships';
export * from './getProfileBulkImportJobListsRelationshipsResponseCollection';
export * from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
export * from './getProfileConversationRelationshipResponse';
export * from './getProfileConversationRelationshipResponseData';
export * from './getProfileImportJobResponseCollectionCompoundDocument';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
export * from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
export * from './getProfileImportJobResponseCompoundDocument';
export * from './getProfileListsRelationshipsResponseCollection';
export * from './getProfileListsRelationshipsResponseCollectionDataInner';
export * from './getProfilePushTokensRelationshipsResponseCollection';
export * from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
export * from './getProfileResponse';
export * from './getProfileResponseCollection';
export * from './getProfileResponseCollectionCompoundDocument';
export * from './getProfileResponseCollectionCompoundDocumentDataInner';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
export * from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
export * from './getProfileResponseCollectionCompoundDocumentIncludedInner';
export * from './getProfileResponseCompoundDocument';
export * from './getProfileResponseCompoundDocumentData';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationships';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
export * from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
export * from './getProfileResponseCompoundDocumentIncludedInner';
export * from './getProfileResponseData';
export * from './getProfileResponseDataAllOfRelationships';
export * from './getProfileSegmentsRelationshipsResponseCollection';
export * from './getPushTokenProfileRelationshipResponse';
export * from './getPushTokenResponseCollection';
export * from './getPushTokenResponseCollectionCompoundDocument';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInner';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
export * from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
export * from './getPushTokenResponseCollectionDataInner';
export * from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
export * from './getPushTokenResponseCompoundDocument';
export * from './getReviewResponseDTOCollectionCompoundDocument';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
export * from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
export * from './getReviewResponseDTOCompoundDocument';
export * from './getSegmentFlowTriggersRelationshipsResponseCollection';
export * from './getSegmentListResponseCollectionCompoundDocument';
export * from './getSegmentListResponseCollectionCompoundDocumentDataInner';
export * from './getSegmentMemberResponseCollection';
export * from './getSegmentMemberResponseCollectionDataInner';
export * from './getSegmentProfilesRelationshipsResponseCollection';
export * from './getSegmentResponseCollection';
export * from './getSegmentResponseCollectionDataInner';
export * from './getSegmentRetrieveResponseCompoundDocument';
export * from './getSegmentRetrieveResponseCompoundDocumentData';
export * from './getSegmentTagsRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollection';
export * from './getTagCampaignRelationshipsResponseCollectionDataInner';
export * from './getTagFlowRelationshipsResponseCollection';
export * from './getTagFlowRelationshipsResponseCollectionDataInner';
export * from './getTagGroupRelationshipResponse';
export * from './getTagGroupRelationshipResponseData';
export * from './getTagGroupResponse';
export * from './getTagGroupResponseCollection';
export * from './getTagGroupResponseCollectionDataInner';
export * from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
export * from './getTagGroupTagsRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollection';
export * from './getTagListRelationshipsResponseCollectionDataInner';
export * from './getTagResponseCollection';
export * from './getTagResponseCollectionCompoundDocument';
export * from './getTagResponseCollectionCompoundDocumentDataInner';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
export * from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
export * from './getTagResponseCollectionDataInner';
export * from './getTagResponseCollectionDataInnerAllOfRelationships';
export * from './getTagResponseCompoundDocument';
export * from './getTagSegmentRelationshipsResponseCollection';
export * from './getTagSegmentRelationshipsResponseCollectionDataInner';
export * from './getTemplateDndResponse';
export * from './getTemplateDndResponseCollection';
export * from './getTemplateResponse';
export * from './getTrackingSettingResponse';
export * from './getTrackingSettingResponseCollection';
export * from './getUniversalContentResponse';
export * from './getUniversalContentResponseCollection';
export * from './getWebFeedResponse';
export * from './getWebFeedResponseCollection';
export * from './getWebhookResponseCollectionCompoundDocument';
export * from './getWebhookResponseCollectionCompoundDocumentDataInner';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
export * from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
export * from './getWebhookResponseCompoundDocument';
export * from './getWebhookTopicResponse';
export * from './getWebhookTopicResponseCollection';
export * from './goToInbox';
export * from './greaterThanPositiveNumericFilter';
export * from './hTMLBlockDataV0';
export * from './hTMLBlockDataV1';
export * from './hTMLBlockV0';
export * from './hTMLBlockV1';
export * from './hTMLText';
export * from './hTMLTextProperties';
export * from './hTMLTextStyles';
export * from './hasEmailMarketing';
export * from './hasEmailMarketingConsent';
export * from './hasEmailMarketingConsentConsentStatus';
export * from './hasEmailMarketingNeverSubscribed';
export * from './hasEmailMarketingSubscribed';
export * from './hasEmailMarketingSubscribedFiltersInner';
export * from './hasPushMarketing';
export * from './hasPushMarketingConsent';
export * from './hasSMSMarketingConsent';
export * from './hasSMSMarketingSubscribed';
export * from './hasSMSMarketingSubscribedFiltersInner';
export * from './headerBlockData';
export * from './headerBlockStyles';
export * from './headerBlockV0';
export * from './headerBlockV1';
export * from './headerBlockV1SubblocksInner';
export * from './headerImageSubBlock';
export * from './headerLinkSubBlock';
export * from './headerLogoSubBlock';
export * from './heading1Style';
export * from './heading2Style';
export * from './heading3Style';
export * from './heading4Style';
export * from './headingStyleStyles';
export * from './horizontalRuleBlockData';
export * from './horizontalRuleBlockStyles';
export * from './horizontalRuleBlockV0';
export * from './horizontalRuleBlockV1';
export * from './identifiedProfiles';
export * from './image';
export * from './imageAction';
export * from './imageAssetProperties';
export * from './imageBlockCroppingProperties';
export * from './imageBlockData';
export * from './imageBlockDataProperties';
export * from './imageBlockStyles';
export * from './imageBlockV0';
export * from './imageBlockV1';
export * from './imageCreateQuery';
export * from './imageCreateQueryResourceObject';
export * from './imageCreateQueryResourceObjectAttributes';
export * from './imageDropShadowStyles';
export * from './imageEnum';
export * from './imagePartialUpdateQuery';
export * from './imagePartialUpdateQueryResourceObject';
export * from './imagePartialUpdateQueryResourceObjectAttributes';
export * from './imageProperties';
export * from './imageResponseObjectResource';
export * from './imageResponseObjectResourceAttributes';
export * from './imageStyles';
export * from './immediateSendStrategy';
export * from './implicitlyOrExplicitlyReachable';
export * from './implicitlyOrExplicitlyUnreachable';
export * from './implicitlyReachable';
export * from './implicitlyUnreachable';
export * from './importErrorEnum';
export * from './importErrorResponseObjectResource';
export * from './importErrorResponseObjectResourceAttributes';
export * from './inStringArrayFilter';
export * from './inTheLastBaseRelativeDateFilter';
export * from './inboundMessageMethodFilter';
export * from './increment';
export * from './inputStyles';
export * from './integerFilter';
export * from './internalScheduledReportBuilderReportData';
export * from './internalScheduledReportData';
export * from './internalServiceAction';
export * from './internalServiceActionData';
export * from './internalServiceActionDataServiceConfiguration';
export * from './internalTrackEventData';
export * from './internalUnknownServiceData';
export * from './invalidEmailDateFilter';
export * from './isSetExistenceFilter';
export * from './lessThanPositiveNumericFilter';
export * from './link';
export * from './linkStyle';
export * from './linkStyleStyles';
export * from './linkStyles';
export * from './listContainsOperatorListContainsFilter';
export * from './listCreateQuery';
export * from './listCreateQueryResourceObject';
export * from './listCreateQueryResourceObjectAttributes';
export * from './listEnum';
export * from './listLengthFilter';
export * from './listListResponseObjectResource';
export * from './listListResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceAttributes';
export * from './listMemberResponseObjectResourceExtended';
export * from './listMemberResponseObjectResourceExtendedAttributes';
export * from './listMembersAddQuery';
export * from './listMembersDeleteQuery';
export * from './listPartialUpdateQuery';
export * from './listPartialUpdateQueryResourceObject';
export * from './listPartialUpdateQueryResourceObjectAttributes';
export * from './listRegexOperatorListContainsFilter';
export * from './listResponseObjectResource';
export * from './listRetrieveResponseObjectResourceAttributes';
export * from './listRetrieveResponseObjectResourceExtended';
export * from './listRetrieveResponseObjectResourceExtendedAttributes';
export * from './listSetFilter';
export * from './listSubstringFilter';
export * from './listTrigger';
export * from './listUpdateAction';
export * from './listUpdateActionData';
export * from './listsAndSegments';
export * from './listsAndSegmentsProperties';
export * from './localStaticSend';
export * from './location';
export * from './locationProperties';
export * from './lowInventoryCondition';
export * from './lowInventoryConditionConditionGroup';
export * from './lowInventoryConditionFilter';
export * from './lowInventoryConditionFilter2';
export * from './lowInventoryTrigger';
export * from './mailboxProviderMethodFilter';
export * from './manualAddManualMethodFilter';
export * from './manualImportManualMethodFilter';
export * from './manualImportMethodFilter';
export * from './manualRemoveMethodFilter';
export * from './manualSuppressionDateFilter';
export * from './mappedMetricEnum';
export * from './mappedMetricPartialUpdateQuery';
export * from './mappedMetricPartialUpdateQueryResourceObject';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
export * from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
export * from './mappedMetricResponseObjectResource';
export * from './mappedMetricResponseObjectResourceAttributes';
export * from './margin';
export * from './messageBlockedMethodFilter';
export * from './methodFilter';
export * from './metricAggregateEnum';
export * from './metricAggregateQuery';
export * from './metricAggregateQueryResourceObject';
export * from './metricAggregateQueryResourceObjectAttributes';
export * from './metricAggregateRowDTO';
export * from './metricCreateQueryResourceObject';
export * from './metricCreateQueryResourceObjectAttributes';
export * from './metricEnum';
export * from './metricPropertyCondition';
export * from './metricPropertyConditionConditionGroup';
export * from './metricPropertyConditionFilter';
export * from './metricPropertyConditionFilter2';
export * from './metricPropertyEnum';
export * from './metricPropertyResponseObjectResourceAttributes';
export * from './metricPropertyResponseObjectResourceExtended';
export * from './metricPropertyResponseObjectResourceExtendedAttributes';
export * from './metricResponseObjectResource';
export * from './metricResponseObjectResourceAttributes';
export * from './metricTrigger';
export * from './mobileOverlay';
export * from './mobilePushBadge';
export * from './mobilePushBadgeBadgeOptions';
export * from './mobilePushContent';
export * from './mobilePushContentCreate';
export * from './mobilePushContentUpdate';
export * from './mobilePushMessageSilentDefinition';
export * from './mobilePushMessageSilentDefinitionCreate';
export * from './mobilePushMessageSilentDefinitionUpdate';
export * from './mobilePushMessageStandardDefinition';
export * from './mobilePushMessageStandardDefinitionCreate';
export * from './mobilePushMessageStandardDefinitionUpdate';
export * from './mobilePushNoBadge';
export * from './mobilePushOptions';
export * from './mobilePushOptionsBadge';
export * from './mobilePushOptionsOnOpen';
export * from './mobileStyle';
export * from './mobileStyleProperties';
export * from './mobileStyleStyles';
export * from './modelDate';
export * from './multiBranchSplitAction';
export * from './multiBranchSplitActionData';
export * from './multiBranchSplitBranch';
export * from './multiBranchSplitBranchBranchFilter';
export * from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
export * from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
export * from './nextStep';
export * from './nextStepProperties';
export * from './noEmailMarketing';
export * from './noEmailMarketingConsent';
export * from './noEmailMarketingConsentConsentStatus';
export * from './noEmailMarketingFiltersInner';
export * from './noEmailMarketingNeverSubscribed';
export * from './noEmailMarketingSubscribed';
export * from './noEmailMarketingUnsubscribed';
export * from './noEmailMarketingUnsubscribedFiltersInner';
export * from './noPushMarketing';
export * from './noPushMarketingConsent';
export * from './noSMSMarketing';
export * from './noSMSMarketingConsent';
export * from './noSMSMarketingConsentConsentStatus';
export * from './noSMSMarketingNeverSubscribed';
export * from './noSMSMarketingUnsubscribed';
export * from './noSMSMarketingUnsubscribedFiltersInner';
export * from './nonLocalStaticSend';
export * from './numericOperatorNumericFilter';
export * from './numericRangeFilter';
export * from './objectLinks';
export * from './oneClickUnsubscribeMethodFilter';
export * from './onlyRelatedLinks';
export * from './onsiteProfileCreateQueryResourceObject';
export * from './onsiteProfileCreateQueryResourceObjectAttributes';
export * from './onsiteProfileMeta';
export * from './openForm';
export * from './openFormProperties';
export * from './optInCode';
export * from './optInCodeProperties';
export * from './optInCodeStyles';
export * from './padding';
export * from './pageVisits';
export * from './pageVisitsProperties';
export * from './patchCampaignMessageResponse';
export * from './patchCampaignMessageResponseData';
export * from './patchCampaignResponse';
export * from './patchCatalogCategoryResponse';
export * from './patchCatalogItemResponse';
export * from './patchCatalogVariantResponse';
export * from './patchCouponCodeResponse';
export * from './patchCouponResponse';
export * from './patchCustomMetricResponse';
export * from './patchFlowActionEncodedResponse';
export * from './patchFlowActionEncodedResponseData';
export * from './patchFlowResponse';
export * from './patchFlowResponseData';
export * from './patchImageResponse';
export * from './patchListPartialUpdateResponse';
export * from './patchMappedMetricResponse';
export * from './patchMappedMetricResponseData';
export * from './patchProfileResponse';
export * from './patchReviewResponseDTO';
export * from './patchReviewResponseDTOData';
export * from './patchReviewResponseDTODataRelationships';
export * from './patchReviewResponseDTODataRelationshipsItem';
export * from './patchReviewResponseDTODataRelationshipsItemData';
export * from './patchSegmentPartialUpdateResponse';
export * from './patchTagGroupResponse';
export * from './patchTemplateDndResponse';
export * from './patchTrackingSettingResponse';
export * from './patchTrackingSettingResponseData';
export * from './patchUniversalContentResponse';
export * from './patchWebFeedResponse';
export * from './patchWebhookResponse';
export * from './phoneNumber';
export * from './phoneNumberConsentChannelSettings';
export * from './phoneNumberProperties';
export * from './phoneNumberStyles';
export * from './postBulkProfileSuppressionsCreateJobResponse';
export * from './postBulkProfileSuppressionsCreateJobResponseData';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
export * from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
export * from './postBulkProfileSuppressionsRemoveJobResponse';
export * from './postBulkProfileSuppressionsRemoveJobResponseData';
export * from './postCampaignMessageResponse';
export * from './postCampaignMessageResponseData';
export * from './postCampaignMessageResponseDataAttributes';
export * from './postCampaignMessageResponseDataAttributesContent';
export * from './postCampaignMessageResponseDataRelationships';
export * from './postCampaignRecipientEstimationJobResponse';
export * from './postCampaignRecipientEstimationJobResponseData';
export * from './postCampaignResponse';
export * from './postCampaignResponseData';
export * from './postCampaignSendJobResponse';
export * from './postCampaignSendJobResponseData';
export * from './postCampaignValuesResponseDTO';
export * from './postCampaignValuesResponseDTOData';
export * from './postCampaignValuesResponseDTODataAttributes';
export * from './postCampaignValuesResponseDTODataRelationships';
export * from './postCatalogCategoryCreateJobResponse';
export * from './postCatalogCategoryCreateJobResponseData';
export * from './postCatalogCategoryDeleteJobResponse';
export * from './postCatalogCategoryDeleteJobResponseData';
export * from './postCatalogCategoryDeleteJobResponseDataRelationships';
export * from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
export * from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
export * from './postCatalogCategoryResponse';
export * from './postCatalogCategoryResponseData';
export * from './postCatalogCategoryResponseDataRelationships';
export * from './postCatalogCategoryResponseDataRelationshipsItems';
export * from './postCatalogCategoryUpdateJobResponse';
export * from './postCatalogCategoryUpdateJobResponseData';
export * from './postCatalogItemCreateJobResponse';
export * from './postCatalogItemCreateJobResponseData';
export * from './postCatalogItemDeleteJobResponse';
export * from './postCatalogItemDeleteJobResponseData';
export * from './postCatalogItemDeleteJobResponseDataRelationships';
export * from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
export * from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
export * from './postCatalogItemResponse';
export * from './postCatalogItemResponseData';
export * from './postCatalogItemUpdateJobResponse';
export * from './postCatalogItemUpdateJobResponseData';
export * from './postCatalogVariantCreateJobResponse';
export * from './postCatalogVariantCreateJobResponseData';
export * from './postCatalogVariantDeleteJobResponse';
export * from './postCatalogVariantDeleteJobResponseData';
export * from './postCatalogVariantDeleteJobResponseDataRelationships';
export * from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
export * from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
export * from './postCatalogVariantResponse';
export * from './postCatalogVariantResponseData';
export * from './postCatalogVariantResponseDataRelationships';
export * from './postCatalogVariantResponseDataRelationshipsItem';
export * from './postCatalogVariantResponseDataRelationshipsItemData';
export * from './postCatalogVariantUpdateJobResponse';
export * from './postCatalogVariantUpdateJobResponseData';
export * from './postCouponCodeCreateJobResponse';
export * from './postCouponCodeCreateJobResponseData';
export * from './postCouponCodeResponse';
export * from './postCouponCodeResponseData';
export * from './postCouponCodeResponseDataRelationships';
export * from './postCouponCodeResponseDataRelationshipsProfile';
export * from './postCouponCodeResponseDataRelationshipsProfileData';
export * from './postCouponResponse';
export * from './postCouponResponseData';
export * from './postCustomMetricResponse';
export * from './postCustomMetricResponseData';
export * from './postDataSourceResponse';
export * from './postDataSourceResponseData';
export * from './postEncodedFormResponse';
export * from './postEncodedFormResponseData';
export * from './postFlowSeriesResponseDTO';
export * from './postFlowSeriesResponseDTOData';
export * from './postFlowSeriesResponseDTODataAttributes';
export * from './postFlowV2Response';
export * from './postFlowV2ResponseData';
export * from './postFlowV2ResponseDataAttributes';
export * from './postFlowValuesResponseDTO';
export * from './postFlowValuesResponseDTOData';
export * from './postFlowValuesResponseDTODataAttributes';
export * from './postFlowValuesResponseDTODataRelationships';
export * from './postFormSeriesResponseDTO';
export * from './postFormSeriesResponseDTOData';
export * from './postFormSeriesResponseDTODataAttributes';
export * from './postFormValuesResponseDTO';
export * from './postFormValuesResponseDTOData';
export * from './postFormValuesResponseDTODataAttributes';
export * from './postImageResponse';
export * from './postImageResponseData';
export * from './postListCreateResponse';
export * from './postListCreateResponseData';
export * from './postListCreateResponseDataRelationships';
export * from './postListCreateResponseDataRelationshipsProfiles';
export * from './postListCreateResponseDataRelationshipsProfilesDataInner';
export * from './postMetricAggregateResponse';
export * from './postMetricAggregateResponseData';
export * from './postMetricAggregateResponseDataAttributes';
export * from './postProfileImportJobResponse';
export * from './postProfileImportJobResponseData';
export * from './postProfileImportJobResponseDataRelationships';
export * from './postProfileImportJobResponseDataRelationshipsImportErrors';
export * from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
export * from './postProfileImportJobResponseDataRelationshipsProfiles';
export * from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
export * from './postProfileMergeResponse';
export * from './postProfileMergeResponseData';
export * from './postProfileResponse';
export * from './postProfileResponseData';
export * from './postProfileResponseDataAttributes';
export * from './postSegmentCreateResponse';
export * from './postSegmentCreateResponseData';
export * from './postSegmentSeriesResponseDTO';
export * from './postSegmentSeriesResponseDTOData';
export * from './postSegmentSeriesResponseDTODataAttributes';
export * from './postSegmentValuesResponseDTO';
export * from './postSegmentValuesResponseDTOData';
export * from './postSegmentValuesResponseDTODataAttributes';
export * from './postTagGroupResponse';
export * from './postTagGroupResponseData';
export * from './postTagGroupResponseDataRelationships';
export * from './postTagResponse';
export * from './postTagResponseData';
export * from './postTagResponseDataRelationships';
export * from './postTagResponseDataRelationshipsCampaigns';
export * from './postTagResponseDataRelationshipsCampaignsDataInner';
export * from './postTemplateDndResponse';
export * from './postTemplateDndResponseData';
export * from './postTemplateDndResponseDataAttributes';
export * from './postTemplateResponse';
export * from './postTemplateResponseData';
export * from './postUniversalContentResponse';
export * from './postUniversalContentResponseData';
export * from './postWebFeedResponse';
export * from './postWebFeedResponseData';
export * from './postWebhookResponse';
export * from './postWebhookResponseData';
export * from './predictiveAnalytics';
export * from './preferencePageFilter';
export * from './preferencePageMethodFilter';
export * from './previouslySubmitted';
export * from './priceDropCondition';
export * from './priceDropConditionConditionGroup';
export * from './priceDropConditionFilter';
export * from './priceDropConditionFilter2';
export * from './priceDropTrigger';
export * from './productBlockData';
export * from './productBlockDataProperties';
export * from './productBlockStyles';
export * from './productBlockV0';
export * from './productBlockV1';
export * from './productSubBlock';
export * from './profileBulkImportJobEnum';
export * from './profileCreateQuery';
export * from './profileCreateQueryResourceObject';
export * from './profileCreateQueryResourceObjectAttributes';
export * from './profileEnum';
export * from './profileEventTracked';
export * from './profileEventTrackedProperties';
export * from './profileHasCustomObjectCondition';
export * from './profileHasCustomObjectFilter';
export * from './profileHasCustomObjectFilterFilter';
export * from './profileHasGroupMembershipCondition';
export * from './profileHasGroupMembershipConditionTimeframeFilter';
export * from './profileHasNotReceivedEmailMessageCondition';
export * from './profileHasNotReceivedPushMessageCondition';
export * from './profileHasNotReceivedPushMessageConditionTimeframeFilter';
export * from './profileHasNotReceivedSmsMessageCondition';
export * from './profileIdentifierDTOResourceObject';
export * from './profileIdentifierDTOResourceObjectAttributes';
export * from './profileImportJobCreateQuery';
export * from './profileImportJobCreateQueryResourceObject';
export * from './profileImportJobCreateQueryResourceObjectAttributes';
export * from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
export * from './profileImportJobCreateQueryResourceObjectRelationships';
export * from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
export * from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
export * from './profileImportJobResponseObjectResource';
export * from './profileImportJobResponseObjectResourceAttributes';
export * from './profileLocation';
export * from './profileMarketingConsentCondition';
export * from './profileMarketingConsentConditionConsent';
export * from './profileMergeEnum';
export * from './profileMergeQuery';
export * from './profileMergeQueryResourceObject';
export * from './profileMergeQueryResourceObjectRelationships';
export * from './profileMergeQueryResourceObjectRelationshipsProfiles';
export * from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
export * from './profileMeta';
export * from './profileMetaPatchProperties';
export * from './profileMetricFunnelSteps';
export * from './profileMetricPropertyFilter';
export * from './profileMetricPropertyFilterFilter';
export * from './profileModificationMethodFilter';
export * from './profileNoGroupMembershipCondition';
export * from './profileNotInFlowCondition';
export * from './profileOperationDelete';
export * from './profileOperationUpdateOrCreateBoolean';
export * from './profileOperationUpdateOrCreateDate';
export * from './profileOperationUpdateOrCreateList';
export * from './profileOperationUpdateOrCreateNumeric';
export * from './profileOperationUpdateOrCreateString';
export * from './profilePartialUpdateQuery';
export * from './profilePartialUpdateQueryResourceObject';
export * from './profilePermissionsCondition';
export * from './profilePermissionsConditionPermission';
export * from './profilePostalCodeDistanceCondition';
export * from './profilePostalCodeDistanceConditionFilter';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
export * from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
export * from './profilePredictiveAnalyticsChannelAffinityRankCondition';
export * from './profilePredictiveAnalyticsChannelAffinityRankFilter';
export * from './profilePredictiveAnalyticsDateCondition';
export * from './profilePredictiveAnalyticsNumericCondition';
export * from './profilePredictiveAnalyticsStringCondition';
export * from './profilePredictiveAnalyticsStringFilter';
export * from './profilePropertyCondition';
export * from './profilePropertyConditionFilter';
export * from './profilePropertyDateTrigger';
export * from './profileRandomSampleCondition';
export * from './profileRegionCondition';
export * from './profileResponseObjectResource';
export * from './profileResponseObjectResourceAttributes';
export * from './profileResponseObjectResourceExtended';
export * from './profileResponseObjectResourceExtendedAttributes';
export * from './profileSubscriptionBulkCreateJobEnum';
export * from './profileSubscriptionBulkDeleteJobEnum';
export * from './profileSubscriptionCreateQueryResourceObject';
export * from './profileSubscriptionCreateQueryResourceObjectAttributes';
export * from './profileSubscriptionDeleteQueryResourceObject';
export * from './profileSubscriptionDeleteQueryResourceObjectAttributes';
export * from './profileSuppressionBulkCreateJobEnum';
export * from './profileSuppressionBulkDeleteJobEnum';
export * from './profileSuppressionCreateQueryResourceObject';
export * from './profileSuppressionCreateQueryResourceObjectAttributes';
export * from './profileSuppressionDeleteQueryResourceObject';
export * from './profileSuppressionDeleteQueryResourceObjectAttributes';
export * from './profileUpsertQuery';
export * from './profileUpsertQueryResourceObject';
export * from './profileUpsertQueryResourceObjectAttributes';
export * from './promotionalSMSSubscription';
export * from './property';
export * from './propertyOption';
export * from './providedLandlineMethodFilter';
export * from './providedNoAgeMethodFilter';
export * from './pushActionButton';
export * from './pushChannel';
export * from './pushMarketing';
export * from './pushOnOpenApp';
export * from './pushOnOpenDeepLink';
export * from './pushProfileUpsertQueryResourceObject';
export * from './pushProfileUpsertQueryResourceObjectAttributes';
export * from './pushSendOptions';
export * from './pushSubscriptionParameters';
export * from './pushTokenCreateQuery';
export * from './pushTokenCreateQueryResourceObject';
export * from './pushTokenCreateQueryResourceObjectAttributes';
export * from './pushTokenCreateQueryResourceObjectAttributesProfile';
export * from './pushTokenDeviceMetadata';
export * from './pushTokenEntry';
export * from './pushTokenEnum';
export * from './pushTokenResponseObjectResource';
export * from './pushTokenResponseObjectResourceAttributes';
export * from './pushUnsubscriptionParameters';
export * from './quoteStyle';
export * from './radioButtons';
export * from './radioButtonsProperties';
export * from './radioButtonsStyles';
export * from './ratingStyle';
export * from './recordedDateFilter';
export * from './redirect';
export * from './redirectProperties';
export * from './reentryCriteria';
export * from './rejectReasonFake';
export * from './rejectReasonMisleading';
export * from './rejectReasonOther';
export * from './rejectReasonPrivateInformation';
export * from './rejectReasonProfanity';
export * from './rejectReasonUnrelated';
export * from './relationshipLinks';
export * from './relativeAnniversaryDateFilter';
export * from './relativeDateOperatorBaseRelativeDateFilter';
export * from './relativeDateRangeFilter';
export * from './renderOptions';
export * from './renderOptionsSubObject';
export * from './resendOptInCode';
export * from './review';
export * from './reviewBlockData';
export * from './reviewBlockDataProperties';
export * from './reviewBlockStyles';
export * from './reviewBlockV0';
export * from './reviewBlockV1';
export * from './reviewEnum';
export * from './reviewPatchQuery';
export * from './reviewPatchQueryResourceObject';
export * from './reviewPatchQueryResourceObjectAttributes';
export * from './reviewPatchQueryResourceObjectAttributesStatus';
export * from './reviewProductDTO';
export * from './reviewProperties';
export * from './reviewPublicReply';
export * from './reviewResponseDTOObjectResource';
export * from './reviewResponseDTOObjectResourceAttributes';
export * from './reviewResponseDTOObjectResourceAttributesStatus';
export * from './reviewStatusFeatured';
export * from './reviewStatusPending';
export * from './reviewStatusPublished';
export * from './reviewStatusRejected';
export * from './reviewStatusRejectedRejectionReason';
export * from './reviewStatusUnpublished';
export * from './reviewStyles';
export * from './reviewerNameStyle';
export * from './richTextMargin';
export * from './richTextStyle';
export * from './richTextStyles';
export * from './rowData';
export * from './rowStyles';
export * from './rowV0';
export * from './rowV0BlocksInner';
export * from './rowV1';
export * from './sMSChannel';
export * from './sMSConsentCheckbox';
export * from './sMSConsentCheckboxProperties';
export * from './sMSConsentCheckboxStyles';
export * from './sMSContent';
export * from './sMSContentCreate';
export * from './sMSContentSubObject';
export * from './sMSDisclosure';
export * from './sMSDisclosureAccountDefault';
export * from './sMSDisclosureCustom';
export * from './sMSDisclosureProperties';
export * from './sMSDisclosurePropertiesContent';
export * from './sMSDisclosureStyles';
export * from './sMSDisclosureTextStyle';
export * from './sMSMarketing';
export * from './sMSMessageDefinition';
export * from './sMSMessageDefinitionCreate';
export * from './sMSSendOptions';
export * from './sMSSubscriptionParameters';
export * from './sMSTransactional';
export * from './sMSUnsubscriptionParameters';
export * from './scroll';
export * from './scrollProperties';
export * from './sectionData';
export * from './sectionProperties';
export * from './sectionStyles';
export * from './sectionV0';
export * from './sectionV1';
export * from './segmentCreateQuery';
export * from './segmentCreateQueryResourceObject';
export * from './segmentCreateQueryResourceObjectAttributes';
export * from './segmentDefinition';
export * from './segmentEnum';
export * from './segmentListResponseObjectResource';
export * from './segmentListResponseObjectResourceAttributes';
export * from './segmentMemberResponseObjectResourceAttributes';
export * from './segmentMemberResponseObjectResourceExtended';
export * from './segmentMemberResponseObjectResourceExtendedAttributes';
export * from './segmentPartialUpdateQuery';
export * from './segmentPartialUpdateQueryResourceObject';
export * from './segmentPartialUpdateQueryResourceObjectAttributes';
export * from './segmentResponseObjectResource';
export * from './segmentRetrieveResponseObjectResourceAttributes';
export * from './segmentRetrieveResponseObjectResourceExtended';
export * from './segmentRetrieveResponseObjectResourceExtendedAttributes';
export * from './segmentSeriesReportEnum';
export * from './segmentSeriesRequestDTO';
export * from './segmentSeriesRequestDTOResourceObject';
export * from './segmentSeriesRequestDTOResourceObjectAttributes';
export * from './segmentTrigger';
export * from './segmentValuesReportEnum';
export * from './segmentValuesRequestDTO';
export * from './segmentValuesRequestDTOResourceObject';
export * from './segmentValuesRequestDTOResourceObjectAttributes';
export * from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
export * from './segmentsProfileMetricCondition';
export * from './segmentsProfileMetricConditionTimeframeFilter';
export * from './segmentsProfileMetricFunnelCondition';
export * from './segmentsProfileMetricFunnelConditionTimeframeFilter';
export * from './sendEmailAction';
export * from './sendEmailActionData';
export * from './sendInternalAlertAction';
export * from './sendInternalAlertActionData';
export * from './sendPushNotificationAction';
export * from './sendPushNotificationActionContentExperimentActionData';
export * from './sendPushNotificationActionCurrentExperiment';
export * from './sendPushNotificationActionData';
export * from './sendSmsAction';
export * from './sendSmsActionData';
export * from './sendTime';
export * from './sendTimeSubObject';
export * from './sendWebhookAction';
export * from './sendWebhookActionData';
export * from './sendWhatsAppAction';
export * from './sendWhatsAppActionData';
export * from './seriesData';
export * from './serverBISSubscriptionCreateQuery';
export * from './serverBISSubscriptionCreateQueryResourceObject';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
export * from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
export * from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
export * from './sftpMethodFilter';
export * from './shopifyIntegrationFilter';
export * from './shopifyIntegrationMethodFilter';
export * from './sideImageSettings';
export * from './signupCounter';
export * from './signupCounterProperties';
export * from './signupCounterStyles';
export * from './sinceFlowStartDateFilter';
export * from './skipToSuccess';
export * from './smartSendTimeStrategy';
export * from './socialBlockData';
export * from './socialBlockProperties';
export * from './socialBlockStyles';
export * from './socialBlockV0';
export * from './socialBlockV1';
export * from './socialBlockV1SubblocksInner';
export * from './socialIconSubBlock';
export * from './socialSpacerSubBlock';
export * from './spacerBlockData';
export * from './spacerBlockStyles';
export * from './spacerBlockV0';
export * from './spacerBlockV1';
export * from './spamComplaintMethodFilter';
export * from './spinToWin';
export * from './spinToWinProperties';
export * from './spinToWinSliceConfig';
export * from './spinToWinSliceStyle';
export * from './spinToWinStyles';
export * from './splitBlockData';
export * from './splitBlockStyles';
export * from './splitBlockV0';
export * from './splitBlockV1';
export * from './splitBlockV1SubblocksInner';
export * from './staticCount';
export * from './staticCouponConfig';
export * from './staticDateFilter';
export * from './staticDateRangeFilter';
export * from './staticImageBlockProperties';
export * from './staticProductBlockProperties';
export * from './staticReviewBlockProperties';
export * from './staticSendStrategy';
export * from './staticSendStrategyOptions';
export * from './staticTableBlockProperties';
export * from './staticTrackingParam';
export * from './statusDateFilter';
export * from './statusDateFilterFilter';
export * from './step';
export * from './streetAddress';
export * from './stringArrayOperatorStringArrayFilter';
export * from './stringInArrayFilter';
export * from './stringOperatorStringFilter';
export * from './stringPhoneOperatorStringArrayFilter';
export * from './submitBackInStock';
export * from './submitBackInStockProperties';
export * from './submitOptInCode';
export * from './subscribeViaSMS';
export * from './subscribeViaSMSProperties';
export * from './subscribeViaWhatsApp';
export * from './subscribeViaWhatsAppProperties';
export * from './subscribedSMSIsRcsCapableFilter';
export * from './subscriptionChannels';
export * from './subscriptionCreateJobCreateQuery';
export * from './subscriptionCreateJobCreateQueryResourceObject';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
export * from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
export * from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
export * from './subscriptionDeleteJobCreateQuery';
export * from './subscriptionDeleteJobCreateQueryResourceObject';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
export * from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
export * from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
export * from './subscriptionParameters';
export * from './subscriptions';
export * from './suppressionCreateJobCreateQuery';
export * from './suppressionCreateJobCreateQueryResourceObject';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributes';
export * from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationships';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
export * from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
export * from './suppressionDeleteJobCreateQuery';
export * from './suppressionDeleteJobCreateQueryResourceObject';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
export * from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
export * from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
export * from './tableBlockData';
export * from './tableBlockDataProperties';
export * from './tableBlockStyles';
export * from './tableBlockV0';
export * from './tableBlockV1';
export * from './tableBlockV1SubblocksInner';
export * from './tableFallbackHtmlSubBlock';
export * from './tableFallbackImageSubBlock';
export * from './tableFallbackTextSubBlock';
export * from './tableHeaderSubBlock';
export * from './tableHtmlSubBlock';
export * from './tableImageSubBlock';
export * from './tableTextSubBlock';
export * from './tagCampaignOp';
export * from './tagCampaignOpDataInner';
export * from './tagCreateQuery';
export * from './tagCreateQueryResourceObject';
export * from './tagCreateQueryResourceObjectRelationships';
export * from './tagCreateQueryResourceObjectRelationshipsTagGroup';
export * from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
export * from './tagEnum';
export * from './tagFlowOp';
export * from './tagFlowOpDataInner';
export * from './tagGroupCreateQuery';
export * from './tagGroupCreateQueryResourceObject';
export * from './tagGroupCreateQueryResourceObjectAttributes';
export * from './tagGroupEnum';
export * from './tagGroupResponseObjectResource';
export * from './tagGroupResponseObjectResourceAttributes';
export * from './tagGroupUpdateQuery';
export * from './tagGroupUpdateQueryResourceObject';
export * from './tagGroupUpdateQueryResourceObjectAttributes';
export * from './tagListOp';
export * from './tagListOpDataInner';
export * from './tagResponseObjectResource';
export * from './tagResponseObjectResourceAttributes';
export * from './tagSegmentOp';
export * from './tagSegmentOpDataInner';
export * from './tagUpdateQuery';
export * from './tagUpdateQueryResourceObject';
export * from './targetDateAction';
export * from './targetDateActionData';
export * from './teaser';
export * from './teaserStyles';
export * from './templateCloneQuery';
export * from './templateCloneQueryResourceObject';
export * from './templateCloneQueryResourceObjectAttributes';
export * from './templateCreateHtmlOrDndQuery';
export * from './templateCreateHtmlOrDndQueryResourceObject';
export * from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
export * from './templateDefinition';
export * from './templateDefinitionStylesInner';
export * from './templateDndResponseObjectResource';
export * from './templateEnum';
export * from './templateRenderQuery';
export * from './templateRenderQueryResourceObject';
export * from './templateRenderQueryResourceObjectAttributes';
export * from './templateResponseObjectResource';
export * from './templateResponseObjectResourceAttributes';
export * from './templateUniversalContentEnum';
export * from './templateUpdateHtmlOrDndQuery';
export * from './templateUpdateHtmlOrDndQueryResourceObject';
export * from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
export * from './text';
export * from './textBlockDataV0';
export * from './textBlockDataV1';
export * from './textBlockStylesV0';
export * from './textBlockStylesV1';
export * from './textBlockV0';
export * from './textBlockV1';
export * from './textProperties';
export * from './textStyleStyles';
export * from './textStyleV0';
export * from './textStyleV1';
export * from './textStyles';
export * from './throttledSendStrategy';
export * from './timeDelayAction';
export * from './timeDelayActionData';
export * from './timeframe';
export * from './trackingParamDTO';
export * from './trackingParamDTOCampaign';
export * from './trackingParamDTOFlow';
export * from './trackingSettingEnum';
export * from './trackingSettingPartialUpdateQuery';
export * from './trackingSettingPartialUpdateQueryResourceObject';
export * from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
export * from './trackingSettingResponseObjectResource';
export * from './trackingSettingResponseObjectResourceAttributes';
export * from './triggerBranchAction';
export * from './triggerBranchActionData';
export * from './triggerBranchActionDataTriggerFilter';
export * from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
export * from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
export * from './uRLPatterns';
export * from './uRLPatternsProperties';
export * from './unidentifiedProfiles';
export * from './uniqueCouponConfig';
export * from './universalContentCreateQuery';
export * from './universalContentCreateQueryResourceObject';
export * from './universalContentCreateQueryResourceObjectAttributes';
export * from './universalContentCreateQueryResourceObjectAttributesDefinition';
export * from './universalContentPartialUpdateQuery';
export * from './universalContentPartialUpdateQueryResourceObject';
export * from './universalContentPartialUpdateQueryResourceObjectAttributes';
export * from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
export * from './universalContentResponseObjectResource';
export * from './universalContentResponseObjectResourceAttributes';
export * from './universalContentResponseObjectResourceAttributesDefinition';
export * from './unsubscriptionChannels';
export * from './unsubscriptionParameters';
export * from './unsupportedBlock';
export * from './unsupportedSendStrategy';
export * from './updateProfileAction';
export * from './updateProfileActionData';
export * from './updateProfileActionDataProfileOperationsInner';
export * from './utmParam';
export * from './valuesData';
export * from './variableTimerConfiguration';
export * from './version';
export * from './versionProperties';
export * from './versionStyles';
export * from './versionTriggersInner';
export * from './videoBlockData';
export * from './videoBlockProperties';
export * from './videoBlockStyles';
export * from './videoBlockV0';
export * from './videoBlockV1';
export * from './visibility';
export * from './webFeedCreateQuery';
export * from './webFeedCreateQueryResourceObject';
export * from './webFeedCreateQueryResourceObjectAttributes';
export * from './webFeedEnum';
export * from './webFeedPartialUpdateQuery';
export * from './webFeedPartialUpdateQueryResourceObject';
export * from './webFeedPartialUpdateQueryResourceObjectAttributes';
export * from './webFeedResponseObjectResource';
export * from './webFeedResponseObjectResourceAttributes';
export * from './webhookCreateQuery';
export * from './webhookCreateQueryResourceObject';
export * from './webhookCreateQueryResourceObjectAttributes';
export * from './webhookCreateQueryResourceObjectRelationships';
export * from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
export * from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
export * from './webhookEnum';
export * from './webhookPartialUpdateQuery';
export * from './webhookPartialUpdateQueryResourceObject';
export * from './webhookPartialUpdateQueryResourceObjectAttributes';
export * from './webhookPartialUpdateQueryResourceObjectRelationships';
export * from './webhookResponseObjectResource';
export * from './webhookResponseObjectResourceAttributes';
export * from './webhookTopicEnum';
export * from './webhookTopicResponseObjectResource';
export * from './whatsAppSubscriptionParameters';
export * from './whatsAppUnsubscriptionParameters';
export * from './whatsappChannel';
export * from './whatsappConversationalChannel';
export * from './whatsappMarketingChannel';
export * from './whatsappTransactionalChannel';

export type RequestFile = ReadStream;


import { ABTestSendStrategy } from './aBTestSendStrategy';
import { APIJobErrorPayload } from './aPIJobErrorPayload';
import { APIMethodFilter } from './aPIMethodFilter';
import { AbTestAction } from './abTestAction';
import { AbTestActionData } from './abTestActionData';
import { AbTestActionDataCurrentExperiment } from './abTestActionDataCurrentExperiment';
import { AbTestActionDataMainAction } from './abTestActionDataMainAction';
import { AccountEnum } from './accountEnum';
import { AccountResponseObjectResource } from './accountResponseObjectResource';
import { AccountResponseObjectResourceAttributes } from './accountResponseObjectResourceAttributes';
import { ActionOutputCondition } from './actionOutputCondition';
import { ActionOutputConditionConditionGroup } from './actionOutputConditionConditionGroup';
import { ActionOutputConditionFilter } from './actionOutputConditionFilter';
import { ActionOutputConditionFilter2 } from './actionOutputConditionFilter2';
import { ActionOutputSplitAction } from './actionOutputSplitAction';
import { ActionOutputSplitActionData } from './actionOutputSplitActionData';
import { AdditionalField } from './additionalField';
import { AfterCloseTimeout } from './afterCloseTimeout';
import { AfterCloseTimeoutProperties } from './afterCloseTimeoutProperties';
import { AgeGate } from './ageGate';
import { AgeGateProperties } from './ageGateProperties';
import { AgeGateStyles } from './ageGateStyles';
import { AlltimeDateFilter } from './alltimeDateFilter';
import { AnniversaryDateFilter } from './anniversaryDateFilter';
import { AttributionEnum } from './attributionEnum';
import { AttributionResponseObjectResource } from './attributionResponseObjectResource';
import { AttributionResponseObjectResourceRelationships } from './attributionResponseObjectResourceRelationships';
import { AttributionResponseObjectResourceRelationshipsAttributedEvent } from './attributionResponseObjectResourceRelationshipsAttributedEvent';
import { AttributionResponseObjectResourceRelationshipsAttributedEventData } from './attributionResponseObjectResourceRelationshipsAttributedEventData';
import { AttributionResponseObjectResourceRelationshipsCampaign } from './attributionResponseObjectResourceRelationshipsCampaign';
import { AttributionResponseObjectResourceRelationshipsCampaignData } from './attributionResponseObjectResourceRelationshipsCampaignData';
import { AttributionResponseObjectResourceRelationshipsCampaignMessage } from './attributionResponseObjectResourceRelationshipsCampaignMessage';
import { AttributionResponseObjectResourceRelationshipsCampaignMessageData } from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
import { AttributionResponseObjectResourceRelationshipsEvent } from './attributionResponseObjectResourceRelationshipsEvent';
import { AttributionResponseObjectResourceRelationshipsEventData } from './attributionResponseObjectResourceRelationshipsEventData';
import { AttributionResponseObjectResourceRelationshipsFlow } from './attributionResponseObjectResourceRelationshipsFlow';
import { AttributionResponseObjectResourceRelationshipsFlowData } from './attributionResponseObjectResourceRelationshipsFlowData';
import { AttributionResponseObjectResourceRelationshipsFlowMessage } from './attributionResponseObjectResourceRelationshipsFlowMessage';
import { AttributionResponseObjectResourceRelationshipsFlowMessageData } from './attributionResponseObjectResourceRelationshipsFlowMessageData';
import { AttributionResponseObjectResourceRelationshipsFlowMessageVariation } from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
import { AttributionResponseObjectResourceRelationshipsFlowMessageVariationData } from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
import { Audiences } from './audiences';
import { AudiencesUpdate } from './audiencesUpdate';
import { AutomaticWinnerSelectionSettings } from './automaticWinnerSelectionSettings';
import { BackInStock } from './backInStock';
import { BackInStockDelayAction } from './backInStockDelayAction';
import { BackInStockDynamicButtonBorderStyles } from './backInStockDynamicButtonBorderStyles';
import { BackInStockDynamicButtonData } from './backInStockDynamicButtonData';
import { BackInStockDynamicButtonDropShadowStyles } from './backInStockDynamicButtonDropShadowStyles';
import { BackInStockDynamicButtonStyles } from './backInStockDynamicButtonStyles';
import { BackInStockDynamicButtonTextStyles } from './backInStockDynamicButtonTextStyles';
import { BackInStockEmailConsentCheckbox } from './backInStockEmailConsentCheckbox';
import { BackInStockEmailConsentCheckboxProperties } from './backInStockEmailConsentCheckboxProperties';
import { BackInStockEmailConsentCheckboxStyles } from './backInStockEmailConsentCheckboxStyles';
import { BackInStockMethodFilter } from './backInStockMethodFilter';
import { BackInStockProperties } from './backInStockProperties';
import { BackInStockSubscriptionEnum } from './backInStockSubscriptionEnum';
import { BackgroundImage } from './backgroundImage';
import { BackgroundImageStyles } from './backgroundImageStyles';
import { BannerStyles } from './bannerStyles';
import { BaseEventCreateQueryBulkEntryResourceObject } from './baseEventCreateQueryBulkEntryResourceObject';
import { BaseEventCreateQueryBulkEntryResourceObjectAttributes } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import { BaseStyle } from './baseStyle';
import { BaseStyleProperties } from './baseStyleProperties';
import { BaseStyleStyles } from './baseStyleStyles';
import { BlockDisplayOptions } from './blockDisplayOptions';
import { Body } from './body';
import { BodyProperties } from './bodyProperties';
import { BodyStyles } from './bodyStyles';
import { BooleanBranchLinks } from './booleanBranchLinks';
import { BooleanFilter } from './booleanFilter';
import { BorderStyle } from './borderStyle';
import { BounceDateFilter } from './bounceDateFilter';
import { BounceDateFilterFilter } from './bounceDateFilterFilter';
import { BulkProfileSuppressionsCreateJobResponseObjectResource } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import { BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import { BulkProfileSuppressionsRemoveJobResponseObjectResource } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import { BulkRemoveMethodFilter } from './bulkRemoveMethodFilter';
import { Button } from './button';
import { ButtonAction } from './buttonAction';
import { ButtonBlockData } from './buttonBlockData';
import { ButtonBlockProperties } from './buttonBlockProperties';
import { ButtonBlockStyles } from './buttonBlockStyles';
import { ButtonBlockV0 } from './buttonBlockV0';
import { ButtonBlockV1 } from './buttonBlockV1';
import { ButtonDropShadowStyles } from './buttonDropShadowStyles';
import { ButtonProperties } from './buttonProperties';
import { ButtonStyles } from './buttonStyles';
import { CalendarDateFilter } from './calendarDateFilter';
import { CampaignCloneQuery } from './campaignCloneQuery';
import { CampaignCloneQueryResourceObject } from './campaignCloneQueryResourceObject';
import { CampaignCloneQueryResourceObjectAttributes } from './campaignCloneQueryResourceObjectAttributes';
import { CampaignCreateQuery } from './campaignCreateQuery';
import { CampaignCreateQueryResourceObject } from './campaignCreateQueryResourceObject';
import { CampaignCreateQueryResourceObjectAttributes } from './campaignCreateQueryResourceObjectAttributes';
import { CampaignCreateQueryResourceObjectAttributesCampaignMessages } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import { CampaignCreateQueryResourceObjectAttributesSendOptions } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import { CampaignCreateQueryResourceObjectAttributesSendStrategy } from './campaignCreateQueryResourceObjectAttributesSendStrategy';
import { CampaignEnum } from './campaignEnum';
import { CampaignMessageAssignTemplateQuery } from './campaignMessageAssignTemplateQuery';
import { CampaignMessageAssignTemplateQueryResourceObject } from './campaignMessageAssignTemplateQueryResourceObject';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationships } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import { CampaignMessageCreateQueryResourceObject } from './campaignMessageCreateQueryResourceObject';
import { CampaignMessageCreateQueryResourceObjectAttributes } from './campaignMessageCreateQueryResourceObjectAttributes';
import { CampaignMessageCreateQueryResourceObjectAttributesDefinition } from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
import { CampaignMessageCreateQueryResourceObjectRelationships } from './campaignMessageCreateQueryResourceObjectRelationships';
import { CampaignMessageCreateQueryResourceObjectRelationshipsImage } from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
import { CampaignMessageCreateQueryResourceObjectRelationshipsImageData } from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
import { CampaignMessageEnum } from './campaignMessageEnum';
import { CampaignMessageImageUpdateQuery } from './campaignMessageImageUpdateQuery';
import { CampaignMessageImageUpdateQueryData } from './campaignMessageImageUpdateQueryData';
import { CampaignMessageIncrement } from './campaignMessageIncrement';
import { CampaignMessagePartialUpdateQuery } from './campaignMessagePartialUpdateQuery';
import { CampaignMessagePartialUpdateQueryResourceObject } from './campaignMessagePartialUpdateQueryResourceObject';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributes } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributesDefinition } from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
import { CampaignMessageProperty } from './campaignMessageProperty';
import { CampaignMessageResponseObjectResource } from './campaignMessageResponseObjectResource';
import { CampaignMessageResponseObjectResourceAttributes } from './campaignMessageResponseObjectResourceAttributes';
import { CampaignMessageResponseObjectResourceAttributesDefinition } from './campaignMessageResponseObjectResourceAttributesDefinition';
import { CampaignMessageStaticCount } from './campaignMessageStaticCount';
import { CampaignPartialUpdateQuery } from './campaignPartialUpdateQuery';
import { CampaignPartialUpdateQueryResourceObject } from './campaignPartialUpdateQueryResourceObject';
import { CampaignPartialUpdateQueryResourceObjectAttributes } from './campaignPartialUpdateQueryResourceObjectAttributes';
import { CampaignPartialUpdateQueryResourceObjectAttributesSendStrategy } from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
import { CampaignRecipientEstimationEnum } from './campaignRecipientEstimationEnum';
import { CampaignRecipientEstimationJobCreateQuery } from './campaignRecipientEstimationJobCreateQuery';
import { CampaignRecipientEstimationJobCreateQueryResourceObject } from './campaignRecipientEstimationJobCreateQueryResourceObject';
import { CampaignRecipientEstimationJobEnum } from './campaignRecipientEstimationJobEnum';
import { CampaignRecipientEstimationJobResponseObjectResource } from './campaignRecipientEstimationJobResponseObjectResource';
import { CampaignRecipientEstimationJobResponseObjectResourceAttributes } from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
import { CampaignRecipientEstimationResponseObjectResource } from './campaignRecipientEstimationResponseObjectResource';
import { CampaignRecipientEstimationResponseObjectResourceAttributes } from './campaignRecipientEstimationResponseObjectResourceAttributes';
import { CampaignResponseObjectResource } from './campaignResponseObjectResource';
import { CampaignResponseObjectResourceAttributes } from './campaignResponseObjectResourceAttributes';
import { CampaignResponseObjectResourceAttributesSendOptions } from './campaignResponseObjectResourceAttributesSendOptions';
import { CampaignResponseObjectResourceAttributesSendStrategy } from './campaignResponseObjectResourceAttributesSendStrategy';
import { CampaignResponseObjectResourceAttributesTrackingOptions } from './campaignResponseObjectResourceAttributesTrackingOptions';
import { CampaignSendJobCreateQuery } from './campaignSendJobCreateQuery';
import { CampaignSendJobCreateQueryResourceObject } from './campaignSendJobCreateQueryResourceObject';
import { CampaignSendJobEnum } from './campaignSendJobEnum';
import { CampaignSendJobPartialUpdateQuery } from './campaignSendJobPartialUpdateQuery';
import { CampaignSendJobPartialUpdateQueryResourceObject } from './campaignSendJobPartialUpdateQueryResourceObject';
import { CampaignSendJobPartialUpdateQueryResourceObjectAttributes } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import { CampaignSendJobResponseObjectResource } from './campaignSendJobResponseObjectResource';
import { CampaignSendJobResponseObjectResourceAttributes } from './campaignSendJobResponseObjectResourceAttributes';
import { CampaignTrackingSettingDynamicParam } from './campaignTrackingSettingDynamicParam';
import { CampaignTrackingSettingStaticParam } from './campaignTrackingSettingStaticParam';
import { CampaignValuesReportEnum } from './campaignValuesReportEnum';
import { CampaignValuesRequestDTO } from './campaignValuesRequestDTO';
import { CampaignValuesRequestDTOResourceObject } from './campaignValuesRequestDTOResourceObject';
import { CampaignValuesRequestDTOResourceObjectAttributes } from './campaignValuesRequestDTOResourceObjectAttributes';
import { CampaignValuesRequestDTOResourceObjectAttributesTimeframe } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
import { CampaignsEmailTrackingOptions } from './campaignsEmailTrackingOptions';
import { CampaignsEmailTrackingOptionsCustomTrackingParamsInner } from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
import { CampaignsSMSTrackingOptions } from './campaignsSMSTrackingOptions';
import { CarrierDeactivationMethodFilter } from './carrierDeactivationMethodFilter';
import { CartItemCount } from './cartItemCount';
import { CartItemCountProperties } from './cartItemCountProperties';
import { CartProduct } from './cartProduct';
import { CartProductProperties } from './cartProductProperties';
import { CartValue } from './cartValue';
import { CartValueProperties } from './cartValueProperties';
import { CatalogCategoryBulkCreateJobEnum } from './catalogCategoryBulkCreateJobEnum';
import { CatalogCategoryBulkDeleteJobEnum } from './catalogCategoryBulkDeleteJobEnum';
import { CatalogCategoryBulkUpdateJobEnum } from './catalogCategoryBulkUpdateJobEnum';
import { CatalogCategoryCreateJobCreateQuery } from './catalogCategoryCreateJobCreateQuery';
import { CatalogCategoryCreateJobCreateQueryResourceObject } from './catalogCategoryCreateJobCreateQueryResourceObject';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributes } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryCreateJobResponseObjectResource } from './catalogCategoryCreateJobResponseObjectResource';
import { CatalogCategoryCreateQuery } from './catalogCategoryCreateQuery';
import { CatalogCategoryCreateQueryResourceObject } from './catalogCategoryCreateQueryResourceObject';
import { CatalogCategoryCreateQueryResourceObjectAttributes } from './catalogCategoryCreateQueryResourceObjectAttributes';
import { CatalogCategoryCreateQueryResourceObjectRelationships } from './catalogCategoryCreateQueryResourceObjectRelationships';
import { CatalogCategoryCreateQueryResourceObjectRelationshipsItems } from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
import { CatalogCategoryDeleteJobCreateQuery } from './catalogCategoryDeleteJobCreateQuery';
import { CatalogCategoryDeleteJobCreateQueryResourceObject } from './catalogCategoryDeleteJobCreateQueryResourceObject';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryDeleteJobResponseObjectResource } from './catalogCategoryDeleteJobResponseObjectResource';
import { CatalogCategoryDeleteQueryResourceObject } from './catalogCategoryDeleteQueryResourceObject';
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryItemOp } from './catalogCategoryItemOp';
import { CatalogCategoryItemOpDataInner } from './catalogCategoryItemOpDataInner';
import { CatalogCategoryResponseObjectResource } from './catalogCategoryResponseObjectResource';
import { CatalogCategoryResponseObjectResourceAttributes } from './catalogCategoryResponseObjectResourceAttributes';
import { CatalogCategoryUpdateJobCreateQuery } from './catalogCategoryUpdateJobCreateQuery';
import { CatalogCategoryUpdateJobCreateQueryResourceObject } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import { CatalogCategoryUpdateJobResponseObjectResource } from './catalogCategoryUpdateJobResponseObjectResource';
import { CatalogCategoryUpdateQuery } from './catalogCategoryUpdateQuery';
import { CatalogCategoryUpdateQueryResourceObject } from './catalogCategoryUpdateQueryResourceObject';
import { CatalogCategoryUpdateQueryResourceObjectAttributes } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import { CatalogItemBulkCreateJobEnum } from './catalogItemBulkCreateJobEnum';
import { CatalogItemBulkDeleteJobEnum } from './catalogItemBulkDeleteJobEnum';
import { CatalogItemBulkUpdateJobEnum } from './catalogItemBulkUpdateJobEnum';
import { CatalogItemCategoryOp } from './catalogItemCategoryOp';
import { CatalogItemCreateJobCreateQuery } from './catalogItemCreateJobCreateQuery';
import { CatalogItemCreateJobCreateQueryResourceObject } from './catalogItemCreateJobCreateQueryResourceObject';
import { CatalogItemCreateJobCreateQueryResourceObjectAttributes } from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
import { CatalogItemCreateJobCreateQueryResourceObjectAttributesItems } from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemCreateJobResponseObjectResource } from './catalogItemCreateJobResponseObjectResource';
import { CatalogItemCreateQuery } from './catalogItemCreateQuery';
import { CatalogItemCreateQueryResourceObject } from './catalogItemCreateQueryResourceObject';
import { CatalogItemCreateQueryResourceObjectAttributes } from './catalogItemCreateQueryResourceObjectAttributes';
import { CatalogItemCreateQueryResourceObjectRelationships } from './catalogItemCreateQueryResourceObjectRelationships';
import { CatalogItemCreateQueryResourceObjectRelationshipsCategories } from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
import { CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner } from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
import { CatalogItemDeleteJobCreateQuery } from './catalogItemDeleteJobCreateQuery';
import { CatalogItemDeleteJobCreateQueryResourceObject } from './catalogItemDeleteJobCreateQueryResourceObject';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributes } from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems } from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemDeleteJobResponseObjectResource } from './catalogItemDeleteJobResponseObjectResource';
import { CatalogItemDeleteQueryResourceObject } from './catalogItemDeleteQueryResourceObject';
import { CatalogItemEnum } from './catalogItemEnum';
import { CatalogItemResponseObjectResource } from './catalogItemResponseObjectResource';
import { CatalogItemResponseObjectResourceAttributes } from './catalogItemResponseObjectResourceAttributes';
import { CatalogItemUpdateJobCreateQuery } from './catalogItemUpdateJobCreateQuery';
import { CatalogItemUpdateJobCreateQueryResourceObject } from './catalogItemUpdateJobCreateQueryResourceObject';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributes } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import { CatalogItemUpdateJobResponseObjectResource } from './catalogItemUpdateJobResponseObjectResource';
import { CatalogItemUpdateQuery } from './catalogItemUpdateQuery';
import { CatalogItemUpdateQueryResourceObject } from './catalogItemUpdateQueryResourceObject';
import { CatalogItemUpdateQueryResourceObjectAttributes } from './catalogItemUpdateQueryResourceObjectAttributes';
import { CatalogVariantBulkCreateJobEnum } from './catalogVariantBulkCreateJobEnum';
import { CatalogVariantBulkDeleteJobEnum } from './catalogVariantBulkDeleteJobEnum';
import { CatalogVariantBulkUpdateJobEnum } from './catalogVariantBulkUpdateJobEnum';
import { CatalogVariantCreateJobCreateQuery } from './catalogVariantCreateJobCreateQuery';
import { CatalogVariantCreateJobCreateQueryResourceObject } from './catalogVariantCreateJobCreateQueryResourceObject';
import { CatalogVariantCreateJobCreateQueryResourceObjectAttributes } from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantCreateJobResponseObjectResource } from './catalogVariantCreateJobResponseObjectResource';
import { CatalogVariantCreateQuery } from './catalogVariantCreateQuery';
import { CatalogVariantCreateQueryResourceObject } from './catalogVariantCreateQueryResourceObject';
import { CatalogVariantCreateQueryResourceObjectAttributes } from './catalogVariantCreateQueryResourceObjectAttributes';
import { CatalogVariantCreateQueryResourceObjectRelationships } from './catalogVariantCreateQueryResourceObjectRelationships';
import { CatalogVariantCreateQueryResourceObjectRelationshipsItem } from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
import { CatalogVariantCreateQueryResourceObjectRelationshipsItemData } from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
import { CatalogVariantDeleteJobCreateQuery } from './catalogVariantDeleteJobCreateQuery';
import { CatalogVariantDeleteJobCreateQueryResourceObject } from './catalogVariantDeleteJobCreateQueryResourceObject';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributes } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
import { CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantDeleteJobResponseObjectResource } from './catalogVariantDeleteJobResponseObjectResource';
import { CatalogVariantDeleteQueryResourceObject } from './catalogVariantDeleteQueryResourceObject';
import { CatalogVariantEnum } from './catalogVariantEnum';
import { CatalogVariantResponseObjectResource } from './catalogVariantResponseObjectResource';
import { CatalogVariantResponseObjectResourceAttributes } from './catalogVariantResponseObjectResourceAttributes';
import { CatalogVariantUpdateJobCreateQuery } from './catalogVariantUpdateJobCreateQuery';
import { CatalogVariantUpdateJobCreateQueryResourceObject } from './catalogVariantUpdateJobCreateQueryResourceObject';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributes } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import { CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import { CatalogVariantUpdateJobResponseObjectResource } from './catalogVariantUpdateJobResponseObjectResource';
import { CatalogVariantUpdateQuery } from './catalogVariantUpdateQuery';
import { CatalogVariantUpdateQueryResourceObject } from './catalogVariantUpdateQueryResourceObject';
import { CatalogVariantUpdateQueryResourceObjectAttributes } from './catalogVariantUpdateQueryResourceObjectAttributes';
import { Channel } from './channel';
import { ChannelProperties } from './channelProperties';
import { ChannelSettings } from './channelSettings';
import { Checkboxes } from './checkboxes';
import { CheckboxesProperties } from './checkboxesProperties';
import { CheckboxesStyles } from './checkboxesStyles';
import { CheckoutMethodFilter } from './checkoutMethodFilter';
import { Close } from './close';
import { CloseButtonStyle } from './closeButtonStyle';
import { CloseProperties } from './closeProperties';
import { CodeAction } from './codeAction';
import { CollectionLinks } from './collectionLinks';
import { ColumnStyles } from './columnStyles';
import { ColumnV0 } from './columnV0';
import { ColumnV1 } from './columnV1';
import { ColumnV1BlocksInner } from './columnV1BlocksInner';
import { ConditionGroup } from './conditionGroup';
import { ConditionGroupConditionsInner } from './conditionGroupConditionsInner';
import { ConditionalBranchAction } from './conditionalBranchAction';
import { ConditionalBranchActionData } from './conditionalBranchActionData';
import { ConditionalBranchActionDataProfileFilter } from './conditionalBranchActionDataProfileFilter';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import { ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import { ConstantContactIntegrationFilter } from './constantContactIntegrationFilter';
import { ConstantContactIntegrationMethodFilter } from './constantContactIntegrationMethodFilter';
import { ContactInformation } from './contactInformation';
import { ContentExperimentAction } from './contentExperimentAction';
import { ContentRepeatV0 } from './contentRepeatV0';
import { ContentRepeatV1 } from './contentRepeatV1';
import { ConversationEnum } from './conversationEnum';
import { ConversationMessageCreateQuery } from './conversationMessageCreateQuery';
import { ConversationMessageCreateQueryResourceObject } from './conversationMessageCreateQueryResourceObject';
import { ConversationMessageCreateQueryResourceObjectAttributes } from './conversationMessageCreateQueryResourceObjectAttributes';
import { ConversationMessageCreateQueryResourceObjectRelationships } from './conversationMessageCreateQueryResourceObjectRelationships';
import { ConversationMessageCreateQueryResourceObjectRelationshipsConversation } from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
import { ConversationMessageCreateQueryResourceObjectRelationshipsConversationData } from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
import { ConversationMessageEnum } from './conversationMessageEnum';
import { ConversationResponseObjectResource } from './conversationResponseObjectResource';
import { CountdownDelayAction } from './countdownDelayAction';
import { CountdownDelayActionData } from './countdownDelayActionData';
import { CountdownTimer } from './countdownTimer';
import { CountdownTimerProperties } from './countdownTimerProperties';
import { CountdownTimerPropertiesConfiguration } from './countdownTimerPropertiesConfiguration';
import { CountdownTimerStyles } from './countdownTimerStyles';
import { Coupon } from './coupon';
import { CouponBlockData } from './couponBlockData';
import { CouponBlockProperties } from './couponBlockProperties';
import { CouponBlockStyles } from './couponBlockStyles';
import { CouponBlockV0 } from './couponBlockV0';
import { CouponBlockV1 } from './couponBlockV1';
import { CouponCodeBulkCreateJobEnum } from './couponCodeBulkCreateJobEnum';
import { CouponCodeCreateJobCreateQuery } from './couponCodeCreateJobCreateQuery';
import { CouponCodeCreateJobCreateQueryResourceObject } from './couponCodeCreateJobCreateQueryResourceObject';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributes } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import { CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import { CouponCodeCreateJobResponseObjectResource } from './couponCodeCreateJobResponseObjectResource';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { CouponCodeCreateQuery } from './couponCodeCreateQuery';
import { CouponCodeCreateQueryResourceObject } from './couponCodeCreateQueryResourceObject';
import { CouponCodeCreateQueryResourceObjectAttributes } from './couponCodeCreateQueryResourceObjectAttributes';
import { CouponCodeCreateQueryResourceObjectRelationships } from './couponCodeCreateQueryResourceObjectRelationships';
import { CouponCodeCreateQueryResourceObjectRelationshipsCoupon } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import { CouponCodeEnum } from './couponCodeEnum';
import { CouponCodeResponseObjectResource } from './couponCodeResponseObjectResource';
import { CouponCodeResponseObjectResourceAttributes } from './couponCodeResponseObjectResourceAttributes';
import { CouponCodeUpdateQuery } from './couponCodeUpdateQuery';
import { CouponCodeUpdateQueryResourceObject } from './couponCodeUpdateQueryResourceObject';
import { CouponCodeUpdateQueryResourceObjectAttributes } from './couponCodeUpdateQueryResourceObjectAttributes';
import { CouponCreateQuery } from './couponCreateQuery';
import { CouponCreateQueryResourceObject } from './couponCreateQueryResourceObject';
import { CouponEnum } from './couponEnum';
import { CouponProperties } from './couponProperties';
import { CouponPropertiesCoupon } from './couponPropertiesCoupon';
import { CouponResponseObjectResource } from './couponResponseObjectResource';
import { CouponResponseObjectResourceAttributes } from './couponResponseObjectResourceAttributes';
import { CouponStyles } from './couponStyles';
import { CouponUpdateQuery } from './couponUpdateQuery';
import { CouponUpdateQueryResourceObject } from './couponUpdateQueryResourceObject';
import { CouponUpdateQueryResourceObjectAttributes } from './couponUpdateQueryResourceObjectAttributes';
import { CustomJavascript } from './customJavascript';
import { CustomMetricCondition } from './customMetricCondition';
import { CustomMetricConditionFilter } from './customMetricConditionFilter';
import { CustomMetricCreateQuery } from './customMetricCreateQuery';
import { CustomMetricCreateQueryResourceObject } from './customMetricCreateQueryResourceObject';
import { CustomMetricCreateQueryResourceObjectAttributes } from './customMetricCreateQueryResourceObjectAttributes';
import { CustomMetricDefinition } from './customMetricDefinition';
import { CustomMetricEnum } from './customMetricEnum';
import { CustomMetricGroup } from './customMetricGroup';
import { CustomMetricPartialUpdateQuery } from './customMetricPartialUpdateQuery';
import { CustomMetricPartialUpdateQueryResourceObject } from './customMetricPartialUpdateQueryResourceObject';
import { CustomMetricPartialUpdateQueryResourceObjectAttributes } from './customMetricPartialUpdateQueryResourceObjectAttributes';
import { CustomMetricResponseObjectResource } from './customMetricResponseObjectResource';
import { CustomMetricResponseObjectResourceAttributes } from './customMetricResponseObjectResourceAttributes';
import { CustomObjectPropertyCondition } from './customObjectPropertyCondition';
import { CustomObjectPropertyConditionFilter } from './customObjectPropertyConditionFilter';
import { CustomObjectTriggerCondition } from './customObjectTriggerCondition';
import { CustomObjectTriggerConditionFilter } from './customObjectTriggerConditionFilter';
import { CustomSourceFilter } from './customSourceFilter';
import { CustomTimeframe } from './customTimeframe';
import { CustomTrackingParamDTO } from './customTrackingParamDTO';
import { DataPrivacyCreateDeletionJobQuery } from './dataPrivacyCreateDeletionJobQuery';
import { DataPrivacyCreateDeletionJobQueryResourceObject } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';
import { DataPrivacyProfileQueryResourceObject } from './dataPrivacyProfileQueryResourceObject';
import { DataPrivacyProfileQueryResourceObjectAttributes } from './dataPrivacyProfileQueryResourceObjectAttributes';
import { DataSourceCreateQuery } from './dataSourceCreateQuery';
import { DataSourceCreateQueryResourceObject } from './dataSourceCreateQueryResourceObject';
import { DataSourceCreateQueryResourceObjectAttributes } from './dataSourceCreateQueryResourceObjectAttributes';
import { DataSourceEnum } from './dataSourceEnum';
import { DataSourceRecordBulkCreateJobCreateQuery } from './dataSourceRecordBulkCreateJobCreateQuery';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObject } from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
import { DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
import { DataSourceRecordBulkCreateJobEnum } from './dataSourceRecordBulkCreateJobEnum';
import { DataSourceRecordCreateJobCreateQuery } from './dataSourceRecordCreateJobCreateQuery';
import { DataSourceRecordCreateJobCreateQueryResourceObject } from './dataSourceRecordCreateJobCreateQueryResourceObject';
import { DataSourceRecordCreateJobCreateQueryResourceObjectAttributes } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
import { DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
import { DataSourceRecordCreateJobEnum } from './dataSourceRecordCreateJobEnum';
import { DataSourceRecordEnum } from './dataSourceRecordEnum';
import { DataSourceRecordResourceObject } from './dataSourceRecordResourceObject';
import { DataSourceRecordResourceObjectAttributes } from './dataSourceRecordResourceObjectAttributes';
import { DataSourceResponseObjectResource } from './dataSourceResponseObjectResource';
import { DataSourceResponseObjectResourceAttributes } from './dataSourceResponseObjectResourceAttributes';
import { DataWarehouseImportMethodFilter } from './dataWarehouseImportMethodFilter';
import { DateProperties } from './dateProperties';
import { DateStyles } from './dateStyles';
import { Delay } from './delay';
import { DelayProperties } from './delayProperties';
import { DeleteTagGroupResponse } from './deleteTagGroupResponse';
import { Device } from './device';
import { DeviceMetadata } from './deviceMetadata';
import { DeviceProperties } from './deviceProperties';
import { DisplayOptions } from './displayOptions';
import { DoubleOptinFilter } from './doubleOptinFilter';
import { DropShadow } from './dropShadow';
import { DropShadowBlockData } from './dropShadowBlockData';
import { DropShadowBlockStyles } from './dropShadowBlockStyles';
import { DropShadowBlockV0 } from './dropShadowBlockV0';
import { DropShadowBlockV1 } from './dropShadowBlockV1';
import { Dropdown } from './dropdown';
import { DropdownProperties } from './dropdownProperties';
import { DropdownStyles } from './dropdownStyles';
import { DynamicButton } from './dynamicButton';
import { DynamicImageBlockProperties } from './dynamicImageBlockProperties';
import { DynamicProductBlockProperties } from './dynamicProductBlockProperties';
import { DynamicReviewBlockProperties } from './dynamicReviewBlockProperties';
import { DynamicTableBlockProperties } from './dynamicTableBlockProperties';
import { DynamicTrackingParam } from './dynamicTrackingParam';
import { EffectiveDateFilter } from './effectiveDateFilter';
import { Email } from './email';
import { EmailChannel } from './emailChannel';
import { EmailContent } from './emailContent';
import { EmailContentSubObject } from './emailContentSubObject';
import { EmailMarketing } from './emailMarketing';
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';
import { EmailMessageDefinition } from './emailMessageDefinition';
import { EmailProperties } from './emailProperties';
import { EmailSendOptions } from './emailSendOptions';
import { EmailStyles } from './emailStyles';
import { EmailSubscriptionParameters } from './emailSubscriptionParameters';
import { EmailUnsubscriptionParameters } from './emailUnsubscriptionParameters';
import { EncodedFormResponseObjectResource } from './encodedFormResponseObjectResource';
import { EncodedFormResponseObjectResourceAttributes } from './encodedFormResponseObjectResourceAttributes';
import { EqualsStringFilter } from './equalsStringFilter';
import { ErrorMessages } from './errorMessages';
import { ErrorSource } from './errorSource';
import { EventBulkCreateEnum } from './eventBulkCreateEnum';
import { EventBulkCreateJobEnum } from './eventBulkCreateJobEnum';
import { EventCreateQueryV2 } from './eventCreateQueryV2';
import { EventCreateQueryV2ResourceObject } from './eventCreateQueryV2ResourceObject';
import { EventCreateQueryV2ResourceObjectAttributes } from './eventCreateQueryV2ResourceObjectAttributes';
import { EventCreateQueryV2ResourceObjectAttributesMetric } from './eventCreateQueryV2ResourceObjectAttributesMetric';
import { EventCreateQueryV2ResourceObjectAttributesProfile } from './eventCreateQueryV2ResourceObjectAttributesProfile';
import { EventEnum } from './eventEnum';
import { EventProfileCreateQueryResourceObject } from './eventProfileCreateQueryResourceObject';
import { EventProfileCreateQueryResourceObjectAttributes } from './eventProfileCreateQueryResourceObjectAttributes';
import { EventResponseObjectResource } from './eventResponseObjectResource';
import { EventResponseObjectResourceAttributes } from './eventResponseObjectResourceAttributes';
import { EventsBulkCreateJob } from './eventsBulkCreateJob';
import { EventsBulkCreateJobResourceObject } from './eventsBulkCreateJobResourceObject';
import { EventsBulkCreateJobResourceObjectAttributes } from './eventsBulkCreateJobResourceObjectAttributes';
import { EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import { EventsBulkCreateQueryResourceObject } from './eventsBulkCreateQueryResourceObject';
import { EventsBulkCreateQueryResourceObjectAttributes } from './eventsBulkCreateQueryResourceObjectAttributes';
import { EventsBulkCreateQueryResourceObjectAttributesEvents } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import { EventsBulkCreateQueryResourceObjectAttributesProfile } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import { ExistenceOperatorExistenceFilter } from './existenceOperatorExistenceFilter';
import { ExitIntent } from './exitIntent';
import { ExplicitlyReachable } from './explicitlyReachable';
import { ExplicitlyReachableFiltersInner } from './explicitlyReachableFiltersInner';
import { ExplicitlyUnreachable } from './explicitlyUnreachable';
import { FailedAgeGateMethodFilter } from './failedAgeGateMethodFilter';
import { FixedTimerConfiguration } from './fixedTimerConfiguration';
import { FlowActionEncodedResponseObjectResource } from './flowActionEncodedResponseObjectResource';
import { FlowActionEncodedResponseObjectResourceAttributes } from './flowActionEncodedResponseObjectResourceAttributes';
import { FlowActionEncodedResponseObjectResourceAttributesDefinition } from './flowActionEncodedResponseObjectResourceAttributesDefinition';
import { FlowActionEnum } from './flowActionEnum';
import { FlowActionUpdateQuery } from './flowActionUpdateQuery';
import { FlowActionUpdateQueryResourceObject } from './flowActionUpdateQueryResourceObject';
import { FlowActionUpdateQueryResourceObjectAttributes } from './flowActionUpdateQueryResourceObjectAttributes';
import { FlowActionUpdateQueryResourceObjectAttributesDefinition } from './flowActionUpdateQueryResourceObjectAttributesDefinition';
import { FlowCreateQuery } from './flowCreateQuery';
import { FlowCreateQueryResourceObject } from './flowCreateQueryResourceObject';
import { FlowCreateQueryResourceObjectAttributes } from './flowCreateQueryResourceObjectAttributes';
import { FlowDefinition } from './flowDefinition';
import { FlowDefinitionActionsInner } from './flowDefinitionActionsInner';
import { FlowDefinitionProfileFilter } from './flowDefinitionProfileFilter';
import { FlowDefinitionProfileFilterConditionGroupsInner } from './flowDefinitionProfileFilterConditionGroupsInner';
import { FlowDefinitionProfileFilterConditionGroupsInnerConditionsInner } from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
import { FlowDefinitionTriggersInner } from './flowDefinitionTriggersInner';
import { FlowEmail } from './flowEmail';
import { FlowEmailAdditionalFilters } from './flowEmailAdditionalFilters';
import { FlowEmailAdditionalFiltersConditionGroupsInner } from './flowEmailAdditionalFiltersConditionGroupsInner';
import { FlowEmailAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowEnum } from './flowEnum';
import { FlowInternalAlert } from './flowInternalAlert';
import { FlowMessageEncodedResponseObjectResource } from './flowMessageEncodedResponseObjectResource';
import { FlowMessageEncodedResponseObjectResourceAttributes } from './flowMessageEncodedResponseObjectResourceAttributes';
import { FlowMessageEncodedResponseObjectResourceAttributesDefinition } from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
import { FlowMessageEnum } from './flowMessageEnum';
import { FlowPushNotification } from './flowPushNotification';
import { FlowPushNotificationAdditionalFilters } from './flowPushNotificationAdditionalFilters';
import { FlowPushNotificationAdditionalFiltersConditionGroupsInner } from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
import { FlowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowPushNotificationBadgeOptions } from './flowPushNotificationBadgeOptions';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { FlowResponseObjectResourceAttributes } from './flowResponseObjectResourceAttributes';
import { FlowSeriesReportEnum } from './flowSeriesReportEnum';
import { FlowSeriesRequestDTO } from './flowSeriesRequestDTO';
import { FlowSeriesRequestDTOResourceObject } from './flowSeriesRequestDTOResourceObject';
import { FlowSeriesRequestDTOResourceObjectAttributes } from './flowSeriesRequestDTOResourceObjectAttributes';
import { FlowSms } from './flowSms';
import { FlowSmsAdditionalFilters } from './flowSmsAdditionalFilters';
import { FlowSmsAdditionalFiltersConditionGroupsInner } from './flowSmsAdditionalFiltersConditionGroupsInner';
import { FlowSmsAdditionalFiltersConditionGroupsInnerConditionsInner } from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
import { FlowTrackingSettingDynamicParam } from './flowTrackingSettingDynamicParam';
import { FlowTrackingSettingStaticParam } from './flowTrackingSettingStaticParam';
import { FlowUpdateQuery } from './flowUpdateQuery';
import { FlowUpdateQueryResourceObject } from './flowUpdateQueryResourceObject';
import { FlowUpdateQueryResourceObjectAttributes } from './flowUpdateQueryResourceObjectAttributes';
import { FlowV2ResponseObjectResourceAttributes } from './flowV2ResponseObjectResourceAttributes';
import { FlowV2ResponseObjectResourceExtended } from './flowV2ResponseObjectResourceExtended';
import { FlowV2ResponseObjectResourceExtendedAttributes } from './flowV2ResponseObjectResourceExtendedAttributes';
import { FlowValuesReportEnum } from './flowValuesReportEnum';
import { FlowValuesRequestDTO } from './flowValuesRequestDTO';
import { FlowValuesRequestDTOResourceObject } from './flowValuesRequestDTOResourceObject';
import { FlowValuesRequestDTOResourceObjectAttributes } from './flowValuesRequestDTOResourceObjectAttributes';
import { FlowWebhook } from './flowWebhook';
import { FlowWhatsApp } from './flowWhatsApp';
import { FlowsProfileMetricCondition } from './flowsProfileMetricCondition';
import { FlowsProfileMetricConditionTimeframeFilter } from './flowsProfileMetricConditionTimeframeFilter';
import { FormCreateQuery } from './formCreateQuery';
import { FormCreateQueryResourceObject } from './formCreateQueryResourceObject';
import { FormCreateQueryResourceObjectAttributes } from './formCreateQueryResourceObjectAttributes';
import { FormDefinition } from './formDefinition';
import { FormEnum } from './formEnum';
import { FormMethodFilter } from './formMethodFilter';
import { FormResponseObjectResource } from './formResponseObjectResource';
import { FormResponseObjectResourceAttributes } from './formResponseObjectResourceAttributes';
import { FormSeriesReportEnum } from './formSeriesReportEnum';
import { FormSeriesRequestDTO } from './formSeriesRequestDTO';
import { FormSeriesRequestDTOResourceObject } from './formSeriesRequestDTOResourceObject';
import { FormSeriesRequestDTOResourceObjectAttributes } from './formSeriesRequestDTOResourceObjectAttributes';
import { FormSubscribeFilter } from './formSubscribeFilter';
import { FormValuesReportEnum } from './formValuesReportEnum';
import { FormValuesRequestDTO } from './formValuesRequestDTO';
import { FormValuesRequestDTOResourceObject } from './formValuesRequestDTOResourceObject';
import { FormValuesRequestDTOResourceObjectAttributes } from './formValuesRequestDTOResourceObjectAttributes';
import { FormVersionABTest } from './formVersionABTest';
import { FormVersionEnum } from './formVersionEnum';
import { FormVersionResponseObjectResource } from './formVersionResponseObjectResource';
import { FormVersionResponseObjectResourceAttributes } from './formVersionResponseObjectResourceAttributes';
import { GetAccountResponse } from './getAccountResponse';
import { GetAccountResponseCollection } from './getAccountResponseCollection';
import { GetAccounts4XXResponse } from './getAccounts4XXResponse';
import { GetAccounts4XXResponseErrorsInner } from './getAccounts4XXResponseErrorsInner';
import { GetAccounts4XXResponseErrorsInnerSource } from './getAccounts4XXResponseErrorsInnerSource';
import { GetBulkProfileSuppressionsCreateJobResponse } from './getBulkProfileSuppressionsCreateJobResponse';
import { GetBulkProfileSuppressionsCreateJobResponseCollection } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import { GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
import { GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
import { GetBulkProfileSuppressionsRemoveJobResponse } from './getBulkProfileSuppressionsRemoveJobResponse';
import { GetBulkProfileSuppressionsRemoveJobResponseCollection } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import { GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner } from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
import { GetCampaignMessageCampaignRelationshipResponse } from './getCampaignMessageCampaignRelationshipResponse';
import { GetCampaignMessageCampaignRelationshipResponseData } from './getCampaignMessageCampaignRelationshipResponseData';
import { GetCampaignMessageImageRelationshipResponse } from './getCampaignMessageImageRelationshipResponse';
import { GetCampaignMessageImageRelationshipResponseData } from './getCampaignMessageImageRelationshipResponseData';
import { GetCampaignMessageResponseCollectionCompoundDocument } from './getCampaignMessageResponseCollectionCompoundDocument';
import { GetCampaignMessageResponseCompoundDocument } from './getCampaignMessageResponseCompoundDocument';
import { GetCampaignMessageResponseCompoundDocumentData } from './getCampaignMessageResponseCompoundDocumentData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import { GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import {  } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import { GetCampaignMessageTemplateRelationshipResponse } from './getCampaignMessageTemplateRelationshipResponse';
import { GetCampaignMessagesRelationshipsResponseCollection } from './getCampaignMessagesRelationshipsResponseCollection';
import { GetCampaignMessagesRelationshipsResponseCollectionDataInner } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import { GetCampaignRecipientEstimationJobResponse } from './getCampaignRecipientEstimationJobResponse';
import { GetCampaignRecipientEstimationResponse } from './getCampaignRecipientEstimationResponse';
import { GetCampaignResponse } from './getCampaignResponse';
import { GetCampaignResponseCollectionCompoundDocument } from './getCampaignResponseCollectionCompoundDocument';
import { GetCampaignResponseCollectionCompoundDocumentDataInner } from './getCampaignResponseCollectionCompoundDocumentDataInner';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
import {  } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import { GetCampaignResponseCompoundDocument } from './getCampaignResponseCompoundDocument';
import { GetCampaignResponseData } from './getCampaignResponseData';
import { GetCampaignResponseDataAllOfRelationships } from './getCampaignResponseDataAllOfRelationships';
import { GetCampaignSendJobResponse } from './getCampaignSendJobResponse';
import { GetCampaignTagsRelationshipsResponseCollection } from './getCampaignTagsRelationshipsResponseCollection';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocument } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import { GetCatalogCategoryCreateJobResponseCompoundDocument } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import { GetCatalogCategoryDeleteJobResponse } from './getCatalogCategoryDeleteJobResponse';
import { GetCatalogCategoryDeleteJobResponseCollection } from './getCatalogCategoryDeleteJobResponseCollection';
import { GetCatalogCategoryDeleteJobResponseCollectionDataInner } from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
import { GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships } from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogCategoryItemsRelationshipsResponseCollection } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import { GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import { GetCatalogCategoryResponse } from './getCatalogCategoryResponse';
import { GetCatalogCategoryResponseCollection } from './getCatalogCategoryResponseCollection';
import { GetCatalogCategoryResponseCollectionDataInner } from './getCatalogCategoryResponseCollectionDataInner';
import { GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships } from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import { GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import { GetCatalogCategoryUpdateJobResponseCompoundDocument } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import { GetCatalogItemCategoriesRelationshipsResponseCollection } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import { GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocument } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import { GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import { GetCatalogItemCreateJobResponseCompoundDocument } from './getCatalogItemCreateJobResponseCompoundDocument';
import { GetCatalogItemDeleteJobResponse } from './getCatalogItemDeleteJobResponse';
import { GetCatalogItemDeleteJobResponseCollection } from './getCatalogItemDeleteJobResponseCollection';
import { GetCatalogItemDeleteJobResponseCollectionDataInner } from './getCatalogItemDeleteJobResponseCollectionDataInner';
import { GetCatalogItemResponseCollectionCompoundDocument } from './getCatalogItemResponseCollectionCompoundDocument';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogItemResponseCompoundDocument } from './getCatalogItemResponseCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocument } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import { GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import { GetCatalogItemUpdateJobResponseCompoundDocument } from './getCatalogItemUpdateJobResponseCompoundDocument';
import { GetCatalogItemVariantsRelationshipsResponseCollection } from './getCatalogItemVariantsRelationshipsResponseCollection';
import { GetCatalogItemVariantsRelationshipsResponseCollectionDataInner } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocument } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogVariantCreateJobResponseCompoundDocument } from './getCatalogVariantCreateJobResponseCompoundDocument';
import { GetCatalogVariantDeleteJobResponse } from './getCatalogVariantDeleteJobResponse';
import { GetCatalogVariantDeleteJobResponseCollection } from './getCatalogVariantDeleteJobResponseCollection';
import { GetCatalogVariantDeleteJobResponseCollectionDataInner } from './getCatalogVariantDeleteJobResponseCollectionDataInner';
import { GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships } from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogVariantResponse } from './getCatalogVariantResponse';
import { GetCatalogVariantResponseCollection } from './getCatalogVariantResponseCollection';
import { GetCatalogVariantResponseCollectionDataInner } from './getCatalogVariantResponseCollectionDataInner';
import { GetCatalogVariantResponseCollectionDataInnerAllOfRelationships } from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocument } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import { GetCatalogVariantUpdateJobResponseCompoundDocument } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import { GetConversationResponse } from './getConversationResponse';
import { GetConversationResponseData } from './getConversationResponseData';
import { GetCouponCodeCouponRelationshipResponse } from './getCouponCodeCouponRelationshipResponse';
import { GetCouponCodeCouponRelationshipResponseData } from './getCouponCodeCouponRelationshipResponseData';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocument } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import { GetCouponCodeCreateJobResponseCompoundDocument } from './getCouponCodeCreateJobResponseCompoundDocument';
import { GetCouponCodeResponseCollection } from './getCouponCodeResponseCollection';
import { GetCouponCodeResponseCollectionCompoundDocument } from './getCouponCodeResponseCollectionCompoundDocument';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInner } from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetCouponCodeResponseCollectionDataInner } from './getCouponCodeResponseCollectionDataInner';
import { GetCouponCodeResponseCollectionDataInnerAllOfRelationships } from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
import { GetCouponCodeResponseCompoundDocument } from './getCouponCodeResponseCompoundDocument';
import { GetCouponCodesRelationshipsResponseCollection } from './getCouponCodesRelationshipsResponseCollection';
import { GetCouponCodesRelationshipsResponseCollectionDataInner } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import { GetCouponResponse } from './getCouponResponse';
import { GetCouponResponseCollection } from './getCouponResponseCollection';
import { GetCustomMetricMetricsRelationshipsResponseCollection } from './getCustomMetricMetricsRelationshipsResponseCollection';
import { GetCustomMetricResponse } from './getCustomMetricResponse';
import { GetCustomMetricResponseCollectionCompoundDocument } from './getCustomMetricResponseCollectionCompoundDocument';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInner } from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
import { GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
import { GetCustomMetricResponseCompoundDocument } from './getCustomMetricResponseCompoundDocument';
import { GetCustomMetricResponseData } from './getCustomMetricResponseData';
import { GetCustomMetricResponseDataAllOfRelationships } from './getCustomMetricResponseDataAllOfRelationships';
import { GetDataSourceResponse } from './getDataSourceResponse';
import { GetDataSourceResponseCollection } from './getDataSourceResponseCollection';
import { GetEncodedFormResponse } from './getEncodedFormResponse';
import { GetEventMetricRelationshipResponse } from './getEventMetricRelationshipResponse';
import { GetEventProfileRelationshipResponse } from './getEventProfileRelationshipResponse';
import { GetEventProfileRelationshipResponseData } from './getEventProfileRelationshipResponseData';
import { GetEventResponseCollectionCompoundDocument } from './getEventResponseCollectionCompoundDocument';
import { GetEventResponseCollectionCompoundDocumentDataInner } from './getEventResponseCollectionCompoundDocumentDataInner';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import {  } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import { GetEventResponseCompoundDocument } from './getEventResponseCompoundDocument';
import { GetFlowActionEncodedResponse } from './getFlowActionEncodedResponse';
import { GetFlowActionEncodedResponseCollection } from './getFlowActionEncodedResponseCollection';
import { GetFlowActionEncodedResponseCollectionDataInner } from './getFlowActionEncodedResponseCollectionDataInner';
import { GetFlowActionEncodedResponseCollectionDataInnerAllOfRelationships } from './getFlowActionEncodedResponseCollectionDataInnerAllOfRelationships';
import { GetFlowActionEncodedResponseCompoundDocument } from './getFlowActionEncodedResponseCompoundDocument';
import { GetFlowActionEncodedResponseCompoundDocumentData } from './getFlowActionEncodedResponseCompoundDocumentData';
import { GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships';
import { GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow';
import { GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import { GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import {  } from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
import { GetFlowActionFlowMessageRelationshipResponseCollection } from './getFlowActionFlowMessageRelationshipResponseCollection';
import { GetFlowActionFlowRelationshipResponse } from './getFlowActionFlowRelationshipResponse';
import { GetFlowFlowActionRelationshipListResponseCollection } from './getFlowFlowActionRelationshipListResponseCollection';
import { GetFlowMessageActionRelationshipResponse } from './getFlowMessageActionRelationshipResponse';
import { GetFlowMessageEncodedResponseCollection } from './getFlowMessageEncodedResponseCollection';
import { GetFlowMessageEncodedResponseCollectionDataInner } from './getFlowMessageEncodedResponseCollectionDataInner';
import { GetFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships } from './getFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships';
import { GetFlowMessageEncodedResponseCompoundDocument } from './getFlowMessageEncodedResponseCompoundDocument';
import { GetFlowMessageEncodedResponseCompoundDocumentData } from './getFlowMessageEncodedResponseCompoundDocumentData';
import { GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships';
import { GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
import { GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import { GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
import { GetFlowMessageTemplateRelationshipResponse } from './getFlowMessageTemplateRelationshipResponse';
import { GetFlowMessageTemplateRelationshipResponseData } from './getFlowMessageTemplateRelationshipResponseData';
import { GetFlowResponse } from './getFlowResponse';
import { GetFlowResponseCollection } from './getFlowResponseCollection';
import { GetFlowResponseCollectionCompoundDocument } from './getFlowResponseCollectionCompoundDocument';
import { GetFlowResponseCollectionCompoundDocumentDataInner } from './getFlowResponseCollectionCompoundDocumentDataInner';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import { GetFlowResponseCollectionDataInner } from './getFlowResponseCollectionDataInner';
import { GetFlowResponseCollectionDataInnerAllOfRelationships } from './getFlowResponseCollectionDataInnerAllOfRelationships';
import { GetFlowTagsRelationshipsResponseCollection } from './getFlowTagsRelationshipsResponseCollection';
import { GetFlowV2ResponseCompoundDocument } from './getFlowV2ResponseCompoundDocument';
import { GetFlowV2ResponseCompoundDocumentData } from './getFlowV2ResponseCompoundDocumentData';
import { GetFormResponse } from './getFormResponse';
import { GetFormResponseCollection } from './getFormResponseCollection';
import { GetFormResponseCollectionDataInner } from './getFormResponseCollectionDataInner';
import { GetFormResponseCollectionDataInnerAllOfRelationships } from './getFormResponseCollectionDataInnerAllOfRelationships';
import { GetFormVersionFormRelationshipResponse } from './getFormVersionFormRelationshipResponse';
import { GetFormVersionFormRelationshipResponseData } from './getFormVersionFormRelationshipResponseData';
import { GetFormVersionResponse } from './getFormVersionResponse';
import { GetFormVersionResponseCollection } from './getFormVersionResponseCollection';
import { GetFormVersionsRelationshipsResponseCollection } from './getFormVersionsRelationshipsResponseCollection';
import { GetFormVersionsRelationshipsResponseCollectionDataInner } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import { GetImageResponse } from './getImageResponse';
import { GetImageResponseCollection } from './getImageResponseCollection';
import { GetImportErrorResponseCollection } from './getImportErrorResponseCollection';
import { GetListFlowTriggersRelationshipsResponseCollection } from './getListFlowTriggersRelationshipsResponseCollection';
import { GetListListResponseCollectionCompoundDocument } from './getListListResponseCollectionCompoundDocument';
import { GetListListResponseCollectionCompoundDocumentDataInner } from './getListListResponseCollectionCompoundDocumentDataInner';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import {  } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import { GetListMemberResponseCollection } from './getListMemberResponseCollection';
import { GetListMemberResponseCollectionDataInner } from './getListMemberResponseCollectionDataInner';
import { GetListProfilesRelationshipsResponseCollection } from './getListProfilesRelationshipsResponseCollection';
import { GetListResponseCollection } from './getListResponseCollection';
import { GetListResponseCollectionDataInner } from './getListResponseCollectionDataInner';
import { GetListResponseCollectionDataInnerAllOfRelationships } from './getListResponseCollectionDataInnerAllOfRelationships';
import { GetListRetrieveResponseCompoundDocument } from './getListRetrieveResponseCompoundDocument';
import { GetListRetrieveResponseCompoundDocumentData } from './getListRetrieveResponseCompoundDocumentData';
import { GetListTagsRelationshipsResponseCollection } from './getListTagsRelationshipsResponseCollection';
import { GetListTagsRelationshipsResponseCollectionDataInner } from './getListTagsRelationshipsResponseCollectionDataInner';
import { GetMappedMetricCustomMetricRelationshipResponse } from './getMappedMetricCustomMetricRelationshipResponse';
import { GetMappedMetricCustomMetricRelationshipResponseData } from './getMappedMetricCustomMetricRelationshipResponseData';
import { GetMappedMetricMetricRelationshipResponse } from './getMappedMetricMetricRelationshipResponse';
import { GetMappedMetricResponseCollectionCompoundDocument } from './getMappedMetricResponseCollectionCompoundDocument';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInner } from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import { GetMappedMetricResponseCompoundDocument } from './getMappedMetricResponseCompoundDocument';
import { GetMetricFlowTriggersRelationshipsResponseCollection } from './getMetricFlowTriggersRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollection } from './getMetricPropertiesRelationshipsResponseCollection';
import { GetMetricPropertiesRelationshipsResponseCollectionDataInner } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import { GetMetricPropertyMetricRelationshipResponse } from './getMetricPropertyMetricRelationshipResponse';
import { GetMetricPropertyResponseCollection } from './getMetricPropertyResponseCollection';
import { GetMetricPropertyResponseCollectionDataInner } from './getMetricPropertyResponseCollectionDataInner';
import { GetMetricPropertyResponseCollectionDataInnerAllOfRelationships } from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
import { GetMetricPropertyResponseCompoundDocument } from './getMetricPropertyResponseCompoundDocument';
import { GetMetricPropertyResponseCompoundDocumentData } from './getMetricPropertyResponseCompoundDocumentData';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
import { GetMetricResponse } from './getMetricResponse';
import { GetMetricResponseCollection } from './getMetricResponseCollection';
import { GetMetricResponseCollectionCompoundDocument } from './getMetricResponseCollectionCompoundDocument';
import { GetMetricResponseCollectionCompoundDocumentDataInner } from './getMetricResponseCollectionCompoundDocumentDataInner';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
import { GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
import { GetMetricResponseCompoundDocument } from './getMetricResponseCompoundDocument';
import { GetMetricResponseData } from './getMetricResponseData';
import { GetMetricResponseDataAllOfRelationships } from './getMetricResponseDataAllOfRelationships';
import { GetProfileBulkImportJobListsRelationshipsResponseCollection } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import { GetProfileBulkImportJobProfilesRelationshipsResponseCollection } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import { GetProfileConversationRelationshipResponse } from './getProfileConversationRelationshipResponse';
import { GetProfileConversationRelationshipResponseData } from './getProfileConversationRelationshipResponseData';
import { GetProfileImportJobResponseCollectionCompoundDocument } from './getProfileImportJobResponseCollectionCompoundDocument';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import { GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import { GetProfileImportJobResponseCompoundDocument } from './getProfileImportJobResponseCompoundDocument';
import { GetProfileListsRelationshipsResponseCollection } from './getProfileListsRelationshipsResponseCollection';
import { GetProfileListsRelationshipsResponseCollectionDataInner } from './getProfileListsRelationshipsResponseCollectionDataInner';
import { GetProfilePushTokensRelationshipsResponseCollection } from './getProfilePushTokensRelationshipsResponseCollection';
import { GetProfilePushTokensRelationshipsResponseCollectionDataInner } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import { GetProfileResponse } from './getProfileResponse';
import { GetProfileResponseCollection } from './getProfileResponseCollection';
import { GetProfileResponseCollectionCompoundDocument } from './getProfileResponseCollectionCompoundDocument';
import { GetProfileResponseCollectionCompoundDocumentDataInner } from './getProfileResponseCollectionCompoundDocumentDataInner';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
import { GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
import {  } from './getProfileResponseCollectionCompoundDocumentIncludedInner';
import { GetProfileResponseCompoundDocument } from './getProfileResponseCompoundDocument';
import { GetProfileResponseCompoundDocumentData } from './getProfileResponseCompoundDocumentData';
import { GetProfileResponseCompoundDocumentDataAllOfRelationships } from './getProfileResponseCompoundDocumentDataAllOfRelationships';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
import {  } from './getProfileResponseCompoundDocumentIncludedInner';
import { GetProfileResponseData } from './getProfileResponseData';
import { GetProfileResponseDataAllOfRelationships } from './getProfileResponseDataAllOfRelationships';
import { GetProfileSegmentsRelationshipsResponseCollection } from './getProfileSegmentsRelationshipsResponseCollection';
import { GetPushTokenProfileRelationshipResponse } from './getPushTokenProfileRelationshipResponse';
import { GetPushTokenResponseCollection } from './getPushTokenResponseCollection';
import { GetPushTokenResponseCollectionCompoundDocument } from './getPushTokenResponseCollectionCompoundDocument';
import { GetPushTokenResponseCollectionCompoundDocumentDataInner } from './getPushTokenResponseCollectionCompoundDocumentDataInner';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import { GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import { GetPushTokenResponseCollectionDataInner } from './getPushTokenResponseCollectionDataInner';
import { GetPushTokenResponseCollectionDataInnerAllOfRelationships } from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
import { GetPushTokenResponseCompoundDocument } from './getPushTokenResponseCompoundDocument';
import { GetReviewResponseDTOCollectionCompoundDocument } from './getReviewResponseDTOCollectionCompoundDocument';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInner } from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
import { GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
import { GetReviewResponseDTOCompoundDocument } from './getReviewResponseDTOCompoundDocument';
import { GetSegmentFlowTriggersRelationshipsResponseCollection } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import { GetSegmentListResponseCollectionCompoundDocument } from './getSegmentListResponseCollectionCompoundDocument';
import { GetSegmentListResponseCollectionCompoundDocumentDataInner } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import { GetSegmentMemberResponseCollection } from './getSegmentMemberResponseCollection';
import { GetSegmentMemberResponseCollectionDataInner } from './getSegmentMemberResponseCollectionDataInner';
import { GetSegmentProfilesRelationshipsResponseCollection } from './getSegmentProfilesRelationshipsResponseCollection';
import { GetSegmentResponseCollection } from './getSegmentResponseCollection';
import { GetSegmentResponseCollectionDataInner } from './getSegmentResponseCollectionDataInner';
import { GetSegmentRetrieveResponseCompoundDocument } from './getSegmentRetrieveResponseCompoundDocument';
import { GetSegmentRetrieveResponseCompoundDocumentData } from './getSegmentRetrieveResponseCompoundDocumentData';
import { GetSegmentTagsRelationshipsResponseCollection } from './getSegmentTagsRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollection } from './getTagCampaignRelationshipsResponseCollection';
import { GetTagCampaignRelationshipsResponseCollectionDataInner } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import { GetTagFlowRelationshipsResponseCollection } from './getTagFlowRelationshipsResponseCollection';
import { GetTagFlowRelationshipsResponseCollectionDataInner } from './getTagFlowRelationshipsResponseCollectionDataInner';
import { GetTagGroupRelationshipResponse } from './getTagGroupRelationshipResponse';
import { GetTagGroupRelationshipResponseData } from './getTagGroupRelationshipResponseData';
import { GetTagGroupResponse } from './getTagGroupResponse';
import { GetTagGroupResponseCollection } from './getTagGroupResponseCollection';
import { GetTagGroupResponseCollectionDataInner } from './getTagGroupResponseCollectionDataInner';
import { GetTagGroupResponseCollectionDataInnerAllOfRelationships } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import { GetTagGroupTagsRelationshipsResponseCollection } from './getTagGroupTagsRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollection } from './getTagListRelationshipsResponseCollection';
import { GetTagListRelationshipsResponseCollectionDataInner } from './getTagListRelationshipsResponseCollectionDataInner';
import { GetTagResponseCollection } from './getTagResponseCollection';
import { GetTagResponseCollectionCompoundDocument } from './getTagResponseCollectionCompoundDocument';
import { GetTagResponseCollectionCompoundDocumentDataInner } from './getTagResponseCollectionCompoundDocumentDataInner';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
import { GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
import { GetTagResponseCollectionDataInner } from './getTagResponseCollectionDataInner';
import { GetTagResponseCollectionDataInnerAllOfRelationships } from './getTagResponseCollectionDataInnerAllOfRelationships';
import { GetTagResponseCompoundDocument } from './getTagResponseCompoundDocument';
import { GetTagSegmentRelationshipsResponseCollection } from './getTagSegmentRelationshipsResponseCollection';
import { GetTagSegmentRelationshipsResponseCollectionDataInner } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import { GetTemplateDndResponse } from './getTemplateDndResponse';
import { GetTemplateDndResponseCollection } from './getTemplateDndResponseCollection';
import { GetTemplateResponse } from './getTemplateResponse';
import { GetTrackingSettingResponse } from './getTrackingSettingResponse';
import { GetTrackingSettingResponseCollection } from './getTrackingSettingResponseCollection';
import { GetUniversalContentResponse } from './getUniversalContentResponse';
import { GetUniversalContentResponseCollection } from './getUniversalContentResponseCollection';
import { GetWebFeedResponse } from './getWebFeedResponse';
import { GetWebFeedResponseCollection } from './getWebFeedResponseCollection';
import { GetWebhookResponseCollectionCompoundDocument } from './getWebhookResponseCollectionCompoundDocument';
import { GetWebhookResponseCollectionCompoundDocumentDataInner } from './getWebhookResponseCollectionCompoundDocumentDataInner';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
import { GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
import { GetWebhookResponseCompoundDocument } from './getWebhookResponseCompoundDocument';
import { GetWebhookTopicResponse } from './getWebhookTopicResponse';
import { GetWebhookTopicResponseCollection } from './getWebhookTopicResponseCollection';
import { GoToInbox } from './goToInbox';
import { GreaterThanPositiveNumericFilter } from './greaterThanPositiveNumericFilter';
import { HTMLBlockDataV0 } from './hTMLBlockDataV0';
import { HTMLBlockDataV1 } from './hTMLBlockDataV1';
import { HTMLBlockV0 } from './hTMLBlockV0';
import { HTMLBlockV1 } from './hTMLBlockV1';
import { HTMLText } from './hTMLText';
import { HTMLTextProperties } from './hTMLTextProperties';
import { HTMLTextStyles } from './hTMLTextStyles';
import { HasEmailMarketing } from './hasEmailMarketing';
import { HasEmailMarketingConsent } from './hasEmailMarketingConsent';
import { HasEmailMarketingConsentConsentStatus } from './hasEmailMarketingConsentConsentStatus';
import { HasEmailMarketingNeverSubscribed } from './hasEmailMarketingNeverSubscribed';
import { HasEmailMarketingSubscribed } from './hasEmailMarketingSubscribed';
import { HasEmailMarketingSubscribedFiltersInner } from './hasEmailMarketingSubscribedFiltersInner';
import { HasPushMarketing } from './hasPushMarketing';
import { HasPushMarketingConsent } from './hasPushMarketingConsent';
import { HasSMSMarketingConsent } from './hasSMSMarketingConsent';
import { HasSMSMarketingSubscribed } from './hasSMSMarketingSubscribed';
import { HasSMSMarketingSubscribedFiltersInner } from './hasSMSMarketingSubscribedFiltersInner';
import { HeaderBlockData } from './headerBlockData';
import { HeaderBlockStyles } from './headerBlockStyles';
import { HeaderBlockV0 } from './headerBlockV0';
import { HeaderBlockV1 } from './headerBlockV1';
import { HeaderBlockV1SubblocksInner } from './headerBlockV1SubblocksInner';
import { HeaderImageSubBlock } from './headerImageSubBlock';
import { HeaderLinkSubBlock } from './headerLinkSubBlock';
import { HeaderLogoSubBlock } from './headerLogoSubBlock';
import { Heading1Style } from './heading1Style';
import { Heading2Style } from './heading2Style';
import { Heading3Style } from './heading3Style';
import { Heading4Style } from './heading4Style';
import { HeadingStyleStyles } from './headingStyleStyles';
import { HorizontalRuleBlockData } from './horizontalRuleBlockData';
import { HorizontalRuleBlockStyles } from './horizontalRuleBlockStyles';
import { HorizontalRuleBlockV0 } from './horizontalRuleBlockV0';
import { HorizontalRuleBlockV1 } from './horizontalRuleBlockV1';
import { IdentifiedProfiles } from './identifiedProfiles';
import { Image } from './image';
import { ImageAction } from './imageAction';
import { ImageAssetProperties } from './imageAssetProperties';
import { ImageBlockCroppingProperties } from './imageBlockCroppingProperties';
import { ImageBlockData } from './imageBlockData';
import { ImageBlockDataProperties } from './imageBlockDataProperties';
import { ImageBlockStyles } from './imageBlockStyles';
import { ImageBlockV0 } from './imageBlockV0';
import { ImageBlockV1 } from './imageBlockV1';
import { ImageCreateQuery } from './imageCreateQuery';
import { ImageCreateQueryResourceObject } from './imageCreateQueryResourceObject';
import { ImageCreateQueryResourceObjectAttributes } from './imageCreateQueryResourceObjectAttributes';
import { ImageDropShadowStyles } from './imageDropShadowStyles';
import { ImageEnum } from './imageEnum';
import { ImagePartialUpdateQuery } from './imagePartialUpdateQuery';
import { ImagePartialUpdateQueryResourceObject } from './imagePartialUpdateQueryResourceObject';
import { ImagePartialUpdateQueryResourceObjectAttributes } from './imagePartialUpdateQueryResourceObjectAttributes';
import { ImageProperties } from './imageProperties';
import { ImageResponseObjectResource } from './imageResponseObjectResource';
import { ImageResponseObjectResourceAttributes } from './imageResponseObjectResourceAttributes';
import { ImageStyles } from './imageStyles';
import { ImmediateSendStrategy } from './immediateSendStrategy';
import { ImplicitlyOrExplicitlyReachable } from './implicitlyOrExplicitlyReachable';
import { ImplicitlyOrExplicitlyUnreachable } from './implicitlyOrExplicitlyUnreachable';
import { ImplicitlyReachable } from './implicitlyReachable';
import { ImplicitlyUnreachable } from './implicitlyUnreachable';
import { ImportErrorEnum } from './importErrorEnum';
import { ImportErrorResponseObjectResource } from './importErrorResponseObjectResource';
import { ImportErrorResponseObjectResourceAttributes } from './importErrorResponseObjectResourceAttributes';
import { InStringArrayFilter } from './inStringArrayFilter';
import { InTheLastBaseRelativeDateFilter } from './inTheLastBaseRelativeDateFilter';
import { InboundMessageMethodFilter } from './inboundMessageMethodFilter';
import { Increment } from './increment';
import { InputStyles } from './inputStyles';
import { IntegerFilter } from './integerFilter';
import { InternalScheduledReportBuilderReportData } from './internalScheduledReportBuilderReportData';
import { InternalScheduledReportData } from './internalScheduledReportData';
import { InternalServiceAction } from './internalServiceAction';
import { InternalServiceActionData } from './internalServiceActionData';
import { InternalServiceActionDataServiceConfiguration } from './internalServiceActionDataServiceConfiguration';
import { InternalTrackEventData } from './internalTrackEventData';
import { InternalUnknownServiceData } from './internalUnknownServiceData';
import { InvalidEmailDateFilter } from './invalidEmailDateFilter';
import { IsSetExistenceFilter } from './isSetExistenceFilter';
import { LessThanPositiveNumericFilter } from './lessThanPositiveNumericFilter';
import { Link } from './link';
import { LinkStyle } from './linkStyle';
import { LinkStyleStyles } from './linkStyleStyles';
import { LinkStyles } from './linkStyles';
import { ListContainsOperatorListContainsFilter } from './listContainsOperatorListContainsFilter';
import { ListCreateQuery } from './listCreateQuery';
import { ListCreateQueryResourceObject } from './listCreateQueryResourceObject';
import { ListCreateQueryResourceObjectAttributes } from './listCreateQueryResourceObjectAttributes';
import { ListEnum } from './listEnum';
import { ListLengthFilter } from './listLengthFilter';
import { ListListResponseObjectResource } from './listListResponseObjectResource';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceAttributes } from './listMemberResponseObjectResourceAttributes';
import { ListMemberResponseObjectResourceExtended } from './listMemberResponseObjectResourceExtended';
import { ListMemberResponseObjectResourceExtendedAttributes } from './listMemberResponseObjectResourceExtendedAttributes';
import { ListMembersAddQuery } from './listMembersAddQuery';
import { ListMembersDeleteQuery } from './listMembersDeleteQuery';
import { ListPartialUpdateQuery } from './listPartialUpdateQuery';
import { ListPartialUpdateQueryResourceObject } from './listPartialUpdateQueryResourceObject';
import { ListPartialUpdateQueryResourceObjectAttributes } from './listPartialUpdateQueryResourceObjectAttributes';
import { ListRegexOperatorListContainsFilter } from './listRegexOperatorListContainsFilter';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ListRetrieveResponseObjectResourceAttributes } from './listRetrieveResponseObjectResourceAttributes';
import { ListRetrieveResponseObjectResourceExtended } from './listRetrieveResponseObjectResourceExtended';
import { ListRetrieveResponseObjectResourceExtendedAttributes } from './listRetrieveResponseObjectResourceExtendedAttributes';
import { ListSetFilter } from './listSetFilter';
import { ListSubstringFilter } from './listSubstringFilter';
import { ListTrigger } from './listTrigger';
import { ListUpdateAction } from './listUpdateAction';
import { ListUpdateActionData } from './listUpdateActionData';
import { ListsAndSegments } from './listsAndSegments';
import { ListsAndSegmentsProperties } from './listsAndSegmentsProperties';
import { LocalStaticSend } from './localStaticSend';
import { Location } from './location';
import { LocationProperties } from './locationProperties';
import { LowInventoryCondition } from './lowInventoryCondition';
import { LowInventoryConditionConditionGroup } from './lowInventoryConditionConditionGroup';
import { LowInventoryConditionFilter } from './lowInventoryConditionFilter';
import { LowInventoryConditionFilter2 } from './lowInventoryConditionFilter2';
import { LowInventoryTrigger } from './lowInventoryTrigger';
import { MailboxProviderMethodFilter } from './mailboxProviderMethodFilter';
import { ManualAddManualMethodFilter } from './manualAddManualMethodFilter';
import { ManualImportManualMethodFilter } from './manualImportManualMethodFilter';
import { ManualImportMethodFilter } from './manualImportMethodFilter';
import { ManualRemoveMethodFilter } from './manualRemoveMethodFilter';
import { ManualSuppressionDateFilter } from './manualSuppressionDateFilter';
import { MappedMetricEnum } from './mappedMetricEnum';
import { MappedMetricPartialUpdateQuery } from './mappedMetricPartialUpdateQuery';
import { MappedMetricPartialUpdateQueryResourceObject } from './mappedMetricPartialUpdateQueryResourceObject';
import { MappedMetricPartialUpdateQueryResourceObjectRelationships } from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
import { MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
import { MappedMetricResponseObjectResource } from './mappedMetricResponseObjectResource';
import { MappedMetricResponseObjectResourceAttributes } from './mappedMetricResponseObjectResourceAttributes';
import { Margin } from './margin';
import { MessageBlockedMethodFilter } from './messageBlockedMethodFilter';
import { MethodFilter } from './methodFilter';
import { MetricAggregateEnum } from './metricAggregateEnum';
import { MetricAggregateQuery } from './metricAggregateQuery';
import { MetricAggregateQueryResourceObject } from './metricAggregateQueryResourceObject';
import { MetricAggregateQueryResourceObjectAttributes } from './metricAggregateQueryResourceObjectAttributes';
import { MetricAggregateRowDTO } from './metricAggregateRowDTO';
import { MetricCreateQueryResourceObject } from './metricCreateQueryResourceObject';
import { MetricCreateQueryResourceObjectAttributes } from './metricCreateQueryResourceObjectAttributes';
import { MetricEnum } from './metricEnum';
import { MetricPropertyCondition } from './metricPropertyCondition';
import { MetricPropertyConditionConditionGroup } from './metricPropertyConditionConditionGroup';
import { MetricPropertyConditionFilter } from './metricPropertyConditionFilter';
import { MetricPropertyConditionFilter2 } from './metricPropertyConditionFilter2';
import { MetricPropertyEnum } from './metricPropertyEnum';
import { MetricPropertyResponseObjectResourceAttributes } from './metricPropertyResponseObjectResourceAttributes';
import { MetricPropertyResponseObjectResourceExtended } from './metricPropertyResponseObjectResourceExtended';
import { MetricPropertyResponseObjectResourceExtendedAttributes } from './metricPropertyResponseObjectResourceExtendedAttributes';
import { MetricResponseObjectResource } from './metricResponseObjectResource';
import { MetricResponseObjectResourceAttributes } from './metricResponseObjectResourceAttributes';
import { MetricTrigger } from './metricTrigger';
import { MobileOverlay } from './mobileOverlay';
import { MobilePushBadge } from './mobilePushBadge';
import { MobilePushBadgeBadgeOptions } from './mobilePushBadgeBadgeOptions';
import { MobilePushContent } from './mobilePushContent';
import { MobilePushContentCreate } from './mobilePushContentCreate';
import { MobilePushContentUpdate } from './mobilePushContentUpdate';
import { MobilePushMessageSilentDefinition } from './mobilePushMessageSilentDefinition';
import { MobilePushMessageSilentDefinitionCreate } from './mobilePushMessageSilentDefinitionCreate';
import { MobilePushMessageSilentDefinitionUpdate } from './mobilePushMessageSilentDefinitionUpdate';
import { MobilePushMessageStandardDefinition } from './mobilePushMessageStandardDefinition';
import { MobilePushMessageStandardDefinitionCreate } from './mobilePushMessageStandardDefinitionCreate';
import { MobilePushMessageStandardDefinitionUpdate } from './mobilePushMessageStandardDefinitionUpdate';
import { MobilePushNoBadge } from './mobilePushNoBadge';
import { MobilePushOptions } from './mobilePushOptions';
import { MobilePushOptionsBadge } from './mobilePushOptionsBadge';
import { MobilePushOptionsOnOpen } from './mobilePushOptionsOnOpen';
import { MobileStyle } from './mobileStyle';
import { MobileStyleProperties } from './mobileStyleProperties';
import { MobileStyleStyles } from './mobileStyleStyles';
import { ModelDate } from './modelDate';
import { MultiBranchSplitAction } from './multiBranchSplitAction';
import { MultiBranchSplitActionData } from './multiBranchSplitActionData';
import { MultiBranchSplitBranch } from './multiBranchSplitBranch';
import { MultiBranchSplitBranchBranchFilter } from './multiBranchSplitBranchBranchFilter';
import { MultiBranchSplitBranchBranchFilterConditionGroupsInner } from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
import { MultiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner } from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
import { NextStep } from './nextStep';
import { NextStepProperties } from './nextStepProperties';
import { NoEmailMarketing } from './noEmailMarketing';
import { NoEmailMarketingConsent } from './noEmailMarketingConsent';
import { NoEmailMarketingConsentConsentStatus } from './noEmailMarketingConsentConsentStatus';
import { NoEmailMarketingFiltersInner } from './noEmailMarketingFiltersInner';
import { NoEmailMarketingNeverSubscribed } from './noEmailMarketingNeverSubscribed';
import { NoEmailMarketingSubscribed } from './noEmailMarketingSubscribed';
import { NoEmailMarketingUnsubscribed } from './noEmailMarketingUnsubscribed';
import { NoEmailMarketingUnsubscribedFiltersInner } from './noEmailMarketingUnsubscribedFiltersInner';
import { NoPushMarketing } from './noPushMarketing';
import { NoPushMarketingConsent } from './noPushMarketingConsent';
import { NoSMSMarketing } from './noSMSMarketing';
import { NoSMSMarketingConsent } from './noSMSMarketingConsent';
import { NoSMSMarketingConsentConsentStatus } from './noSMSMarketingConsentConsentStatus';
import { NoSMSMarketingNeverSubscribed } from './noSMSMarketingNeverSubscribed';
import { NoSMSMarketingUnsubscribed } from './noSMSMarketingUnsubscribed';
import { NoSMSMarketingUnsubscribedFiltersInner } from './noSMSMarketingUnsubscribedFiltersInner';
import { NonLocalStaticSend } from './nonLocalStaticSend';
import { NumericOperatorNumericFilter } from './numericOperatorNumericFilter';
import { NumericRangeFilter } from './numericRangeFilter';
import { ObjectLinks } from './objectLinks';
import { OneClickUnsubscribeMethodFilter } from './oneClickUnsubscribeMethodFilter';
import { OnlyRelatedLinks } from './onlyRelatedLinks';
import { OnsiteProfileCreateQueryResourceObject } from './onsiteProfileCreateQueryResourceObject';
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { OnsiteProfileMeta } from './onsiteProfileMeta';
import { OpenForm } from './openForm';
import { OpenFormProperties } from './openFormProperties';
import { OptInCode } from './optInCode';
import { OptInCodeProperties } from './optInCodeProperties';
import { OptInCodeStyles } from './optInCodeStyles';
import { Padding } from './padding';
import { PageVisits } from './pageVisits';
import { PageVisitsProperties } from './pageVisitsProperties';
import { PatchCampaignMessageResponse } from './patchCampaignMessageResponse';
import { PatchCampaignMessageResponseData } from './patchCampaignMessageResponseData';
import { PatchCampaignResponse } from './patchCampaignResponse';
import { PatchCatalogCategoryResponse } from './patchCatalogCategoryResponse';
import { PatchCatalogItemResponse } from './patchCatalogItemResponse';
import { PatchCatalogVariantResponse } from './patchCatalogVariantResponse';
import { PatchCouponCodeResponse } from './patchCouponCodeResponse';
import { PatchCouponResponse } from './patchCouponResponse';
import { PatchCustomMetricResponse } from './patchCustomMetricResponse';
import { PatchFlowActionEncodedResponse } from './patchFlowActionEncodedResponse';
import { PatchFlowActionEncodedResponseData } from './patchFlowActionEncodedResponseData';
import { PatchFlowResponse } from './patchFlowResponse';
import { PatchFlowResponseData } from './patchFlowResponseData';
import { PatchImageResponse } from './patchImageResponse';
import { PatchListPartialUpdateResponse } from './patchListPartialUpdateResponse';
import { PatchMappedMetricResponse } from './patchMappedMetricResponse';
import { PatchMappedMetricResponseData } from './patchMappedMetricResponseData';
import { PatchProfileResponse } from './patchProfileResponse';
import { PatchReviewResponseDTO } from './patchReviewResponseDTO';
import { PatchReviewResponseDTOData } from './patchReviewResponseDTOData';
import { PatchReviewResponseDTODataRelationships } from './patchReviewResponseDTODataRelationships';
import { PatchReviewResponseDTODataRelationshipsItem } from './patchReviewResponseDTODataRelationshipsItem';
import { PatchReviewResponseDTODataRelationshipsItemData } from './patchReviewResponseDTODataRelationshipsItemData';
import { PatchSegmentPartialUpdateResponse } from './patchSegmentPartialUpdateResponse';
import { PatchTagGroupResponse } from './patchTagGroupResponse';
import { PatchTemplateDndResponse } from './patchTemplateDndResponse';
import { PatchTrackingSettingResponse } from './patchTrackingSettingResponse';
import { PatchTrackingSettingResponseData } from './patchTrackingSettingResponseData';
import { PatchUniversalContentResponse } from './patchUniversalContentResponse';
import { PatchWebFeedResponse } from './patchWebFeedResponse';
import { PatchWebhookResponse } from './patchWebhookResponse';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberConsentChannelSettings } from './phoneNumberConsentChannelSettings';
import { PhoneNumberProperties } from './phoneNumberProperties';
import { PhoneNumberStyles } from './phoneNumberStyles';
import { PostBulkProfileSuppressionsCreateJobResponse } from './postBulkProfileSuppressionsCreateJobResponse';
import { PostBulkProfileSuppressionsCreateJobResponseData } from './postBulkProfileSuppressionsCreateJobResponseData';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationships } from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
import { PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
import { PostBulkProfileSuppressionsRemoveJobResponse } from './postBulkProfileSuppressionsRemoveJobResponse';
import { PostBulkProfileSuppressionsRemoveJobResponseData } from './postBulkProfileSuppressionsRemoveJobResponseData';
import { PostCampaignMessageResponse } from './postCampaignMessageResponse';
import { PostCampaignMessageResponseData } from './postCampaignMessageResponseData';
import { PostCampaignMessageResponseDataAttributes } from './postCampaignMessageResponseDataAttributes';
import { PostCampaignMessageResponseDataAttributesContent } from './postCampaignMessageResponseDataAttributesContent';
import { PostCampaignMessageResponseDataRelationships } from './postCampaignMessageResponseDataRelationships';
import { PostCampaignRecipientEstimationJobResponse } from './postCampaignRecipientEstimationJobResponse';
import { PostCampaignRecipientEstimationJobResponseData } from './postCampaignRecipientEstimationJobResponseData';
import { PostCampaignResponse } from './postCampaignResponse';
import { PostCampaignResponseData } from './postCampaignResponseData';
import { PostCampaignSendJobResponse } from './postCampaignSendJobResponse';
import { PostCampaignSendJobResponseData } from './postCampaignSendJobResponseData';
import { PostCampaignValuesResponseDTO } from './postCampaignValuesResponseDTO';
import { PostCampaignValuesResponseDTOData } from './postCampaignValuesResponseDTOData';
import { PostCampaignValuesResponseDTODataAttributes } from './postCampaignValuesResponseDTODataAttributes';
import { PostCampaignValuesResponseDTODataRelationships } from './postCampaignValuesResponseDTODataRelationships';
import { PostCatalogCategoryCreateJobResponse } from './postCatalogCategoryCreateJobResponse';
import { PostCatalogCategoryCreateJobResponseData } from './postCatalogCategoryCreateJobResponseData';
import { PostCatalogCategoryDeleteJobResponse } from './postCatalogCategoryDeleteJobResponse';
import { PostCatalogCategoryDeleteJobResponseData } from './postCatalogCategoryDeleteJobResponseData';
import { PostCatalogCategoryDeleteJobResponseDataRelationships } from './postCatalogCategoryDeleteJobResponseDataRelationships';
import { PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
import { PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
import { PostCatalogCategoryResponse } from './postCatalogCategoryResponse';
import { PostCatalogCategoryResponseData } from './postCatalogCategoryResponseData';
import { PostCatalogCategoryResponseDataRelationships } from './postCatalogCategoryResponseDataRelationships';
import { PostCatalogCategoryResponseDataRelationshipsItems } from './postCatalogCategoryResponseDataRelationshipsItems';
import { PostCatalogCategoryUpdateJobResponse } from './postCatalogCategoryUpdateJobResponse';
import { PostCatalogCategoryUpdateJobResponseData } from './postCatalogCategoryUpdateJobResponseData';
import { PostCatalogItemCreateJobResponse } from './postCatalogItemCreateJobResponse';
import { PostCatalogItemCreateJobResponseData } from './postCatalogItemCreateJobResponseData';
import { PostCatalogItemDeleteJobResponse } from './postCatalogItemDeleteJobResponse';
import { PostCatalogItemDeleteJobResponseData } from './postCatalogItemDeleteJobResponseData';
import { PostCatalogItemDeleteJobResponseDataRelationships } from './postCatalogItemDeleteJobResponseDataRelationships';
import { PostCatalogItemDeleteJobResponseDataRelationshipsItems } from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
import { PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner } from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
import { PostCatalogItemResponse } from './postCatalogItemResponse';
import { PostCatalogItemResponseData } from './postCatalogItemResponseData';
import { PostCatalogItemUpdateJobResponse } from './postCatalogItemUpdateJobResponse';
import { PostCatalogItemUpdateJobResponseData } from './postCatalogItemUpdateJobResponseData';
import { PostCatalogVariantCreateJobResponse } from './postCatalogVariantCreateJobResponse';
import { PostCatalogVariantCreateJobResponseData } from './postCatalogVariantCreateJobResponseData';
import { PostCatalogVariantDeleteJobResponse } from './postCatalogVariantDeleteJobResponse';
import { PostCatalogVariantDeleteJobResponseData } from './postCatalogVariantDeleteJobResponseData';
import { PostCatalogVariantDeleteJobResponseDataRelationships } from './postCatalogVariantDeleteJobResponseDataRelationships';
import { PostCatalogVariantDeleteJobResponseDataRelationshipsVariants } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
import { PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
import { PostCatalogVariantResponse } from './postCatalogVariantResponse';
import { PostCatalogVariantResponseData } from './postCatalogVariantResponseData';
import { PostCatalogVariantResponseDataRelationships } from './postCatalogVariantResponseDataRelationships';
import { PostCatalogVariantResponseDataRelationshipsItem } from './postCatalogVariantResponseDataRelationshipsItem';
import { PostCatalogVariantResponseDataRelationshipsItemData } from './postCatalogVariantResponseDataRelationshipsItemData';
import { PostCatalogVariantUpdateJobResponse } from './postCatalogVariantUpdateJobResponse';
import { PostCatalogVariantUpdateJobResponseData } from './postCatalogVariantUpdateJobResponseData';
import { PostCouponCodeCreateJobResponse } from './postCouponCodeCreateJobResponse';
import { PostCouponCodeCreateJobResponseData } from './postCouponCodeCreateJobResponseData';
import { PostCouponCodeResponse } from './postCouponCodeResponse';
import { PostCouponCodeResponseData } from './postCouponCodeResponseData';
import { PostCouponCodeResponseDataRelationships } from './postCouponCodeResponseDataRelationships';
import { PostCouponCodeResponseDataRelationshipsProfile } from './postCouponCodeResponseDataRelationshipsProfile';
import { PostCouponCodeResponseDataRelationshipsProfileData } from './postCouponCodeResponseDataRelationshipsProfileData';
import { PostCouponResponse } from './postCouponResponse';
import { PostCouponResponseData } from './postCouponResponseData';
import { PostCustomMetricResponse } from './postCustomMetricResponse';
import { PostCustomMetricResponseData } from './postCustomMetricResponseData';
import { PostDataSourceResponse } from './postDataSourceResponse';
import { PostDataSourceResponseData } from './postDataSourceResponseData';
import { PostEncodedFormResponse } from './postEncodedFormResponse';
import { PostEncodedFormResponseData } from './postEncodedFormResponseData';
import { PostFlowSeriesResponseDTO } from './postFlowSeriesResponseDTO';
import { PostFlowSeriesResponseDTOData } from './postFlowSeriesResponseDTOData';
import { PostFlowSeriesResponseDTODataAttributes } from './postFlowSeriesResponseDTODataAttributes';
import { PostFlowV2Response } from './postFlowV2Response';
import { PostFlowV2ResponseData } from './postFlowV2ResponseData';
import { PostFlowV2ResponseDataAttributes } from './postFlowV2ResponseDataAttributes';
import { PostFlowValuesResponseDTO } from './postFlowValuesResponseDTO';
import { PostFlowValuesResponseDTOData } from './postFlowValuesResponseDTOData';
import { PostFlowValuesResponseDTODataAttributes } from './postFlowValuesResponseDTODataAttributes';
import { PostFlowValuesResponseDTODataRelationships } from './postFlowValuesResponseDTODataRelationships';
import { PostFormSeriesResponseDTO } from './postFormSeriesResponseDTO';
import { PostFormSeriesResponseDTOData } from './postFormSeriesResponseDTOData';
import { PostFormSeriesResponseDTODataAttributes } from './postFormSeriesResponseDTODataAttributes';
import { PostFormValuesResponseDTO } from './postFormValuesResponseDTO';
import { PostFormValuesResponseDTOData } from './postFormValuesResponseDTOData';
import { PostFormValuesResponseDTODataAttributes } from './postFormValuesResponseDTODataAttributes';
import { PostImageResponse } from './postImageResponse';
import { PostImageResponseData } from './postImageResponseData';
import { PostListCreateResponse } from './postListCreateResponse';
import { PostListCreateResponseData } from './postListCreateResponseData';
import { PostListCreateResponseDataRelationships } from './postListCreateResponseDataRelationships';
import { PostListCreateResponseDataRelationshipsProfiles } from './postListCreateResponseDataRelationshipsProfiles';
import { PostListCreateResponseDataRelationshipsProfilesDataInner } from './postListCreateResponseDataRelationshipsProfilesDataInner';
import { PostMetricAggregateResponse } from './postMetricAggregateResponse';
import { PostMetricAggregateResponseData } from './postMetricAggregateResponseData';
import { PostMetricAggregateResponseDataAttributes } from './postMetricAggregateResponseDataAttributes';
import { PostProfileImportJobResponse } from './postProfileImportJobResponse';
import { PostProfileImportJobResponseData } from './postProfileImportJobResponseData';
import { PostProfileImportJobResponseDataRelationships } from './postProfileImportJobResponseDataRelationships';
import { PostProfileImportJobResponseDataRelationshipsImportErrors } from './postProfileImportJobResponseDataRelationshipsImportErrors';
import { PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner } from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
import { PostProfileImportJobResponseDataRelationshipsProfiles } from './postProfileImportJobResponseDataRelationshipsProfiles';
import { PostProfileImportJobResponseDataRelationshipsProfilesDataInner } from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
import { PostProfileMergeResponse } from './postProfileMergeResponse';
import { PostProfileMergeResponseData } from './postProfileMergeResponseData';
import { PostProfileResponse } from './postProfileResponse';
import { PostProfileResponseData } from './postProfileResponseData';
import { PostProfileResponseDataAttributes } from './postProfileResponseDataAttributes';
import { PostSegmentCreateResponse } from './postSegmentCreateResponse';
import { PostSegmentCreateResponseData } from './postSegmentCreateResponseData';
import { PostSegmentSeriesResponseDTO } from './postSegmentSeriesResponseDTO';
import { PostSegmentSeriesResponseDTOData } from './postSegmentSeriesResponseDTOData';
import { PostSegmentSeriesResponseDTODataAttributes } from './postSegmentSeriesResponseDTODataAttributes';
import { PostSegmentValuesResponseDTO } from './postSegmentValuesResponseDTO';
import { PostSegmentValuesResponseDTOData } from './postSegmentValuesResponseDTOData';
import { PostSegmentValuesResponseDTODataAttributes } from './postSegmentValuesResponseDTODataAttributes';
import { PostTagGroupResponse } from './postTagGroupResponse';
import { PostTagGroupResponseData } from './postTagGroupResponseData';
import { PostTagGroupResponseDataRelationships } from './postTagGroupResponseDataRelationships';
import { PostTagResponse } from './postTagResponse';
import { PostTagResponseData } from './postTagResponseData';
import { PostTagResponseDataRelationships } from './postTagResponseDataRelationships';
import { PostTagResponseDataRelationshipsCampaigns } from './postTagResponseDataRelationshipsCampaigns';
import { PostTagResponseDataRelationshipsCampaignsDataInner } from './postTagResponseDataRelationshipsCampaignsDataInner';
import { PostTemplateDndResponse } from './postTemplateDndResponse';
import { PostTemplateDndResponseData } from './postTemplateDndResponseData';
import { PostTemplateDndResponseDataAttributes } from './postTemplateDndResponseDataAttributes';
import { PostTemplateResponse } from './postTemplateResponse';
import { PostTemplateResponseData } from './postTemplateResponseData';
import { PostUniversalContentResponse } from './postUniversalContentResponse';
import { PostUniversalContentResponseData } from './postUniversalContentResponseData';
import { PostWebFeedResponse } from './postWebFeedResponse';
import { PostWebFeedResponseData } from './postWebFeedResponseData';
import { PostWebhookResponse } from './postWebhookResponse';
import { PostWebhookResponseData } from './postWebhookResponseData';
import { PredictiveAnalytics } from './predictiveAnalytics';
import { PreferencePageFilter } from './preferencePageFilter';
import { PreferencePageMethodFilter } from './preferencePageMethodFilter';
import { PreviouslySubmitted } from './previouslySubmitted';
import { PriceDropCondition } from './priceDropCondition';
import { PriceDropConditionConditionGroup } from './priceDropConditionConditionGroup';
import { PriceDropConditionFilter } from './priceDropConditionFilter';
import { PriceDropConditionFilter2 } from './priceDropConditionFilter2';
import { PriceDropTrigger } from './priceDropTrigger';
import { ProductBlockData } from './productBlockData';
import { ProductBlockDataProperties } from './productBlockDataProperties';
import { ProductBlockStyles } from './productBlockStyles';
import { ProductBlockV0 } from './productBlockV0';
import { ProductBlockV1 } from './productBlockV1';
import { ProductSubBlock } from './productSubBlock';
import { ProfileBulkImportJobEnum } from './profileBulkImportJobEnum';
import { ProfileCreateQuery } from './profileCreateQuery';
import { ProfileCreateQueryResourceObject } from './profileCreateQueryResourceObject';
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
import { ProfileEventTracked } from './profileEventTracked';
import { ProfileEventTrackedProperties } from './profileEventTrackedProperties';
import { ProfileHasCustomObjectCondition } from './profileHasCustomObjectCondition';
import { ProfileHasCustomObjectFilter } from './profileHasCustomObjectFilter';
import { ProfileHasCustomObjectFilterFilter } from './profileHasCustomObjectFilterFilter';
import { ProfileHasGroupMembershipCondition } from './profileHasGroupMembershipCondition';
import { ProfileHasGroupMembershipConditionTimeframeFilter } from './profileHasGroupMembershipConditionTimeframeFilter';
import { ProfileHasNotReceivedEmailMessageCondition } from './profileHasNotReceivedEmailMessageCondition';
import { ProfileHasNotReceivedPushMessageCondition } from './profileHasNotReceivedPushMessageCondition';
import { ProfileHasNotReceivedPushMessageConditionTimeframeFilter } from './profileHasNotReceivedPushMessageConditionTimeframeFilter';
import { ProfileHasNotReceivedSmsMessageCondition } from './profileHasNotReceivedSmsMessageCondition';
import { ProfileIdentifierDTOResourceObject } from './profileIdentifierDTOResourceObject';
import { ProfileIdentifierDTOResourceObjectAttributes } from './profileIdentifierDTOResourceObjectAttributes';
import { ProfileImportJobCreateQuery } from './profileImportJobCreateQuery';
import { ProfileImportJobCreateQueryResourceObject } from './profileImportJobCreateQueryResourceObject';
import { ProfileImportJobCreateQueryResourceObjectAttributes } from './profileImportJobCreateQueryResourceObjectAttributes';
import { ProfileImportJobCreateQueryResourceObjectAttributesProfiles } from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
import { ProfileImportJobCreateQueryResourceObjectRelationships } from './profileImportJobCreateQueryResourceObjectRelationships';
import { ProfileImportJobCreateQueryResourceObjectRelationshipsLists } from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
import { ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner } from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
import { ProfileImportJobResponseObjectResource } from './profileImportJobResponseObjectResource';
import { ProfileImportJobResponseObjectResourceAttributes } from './profileImportJobResponseObjectResourceAttributes';
import { ProfileLocation } from './profileLocation';
import { ProfileMarketingConsentCondition } from './profileMarketingConsentCondition';
import { ProfileMarketingConsentConditionConsent } from './profileMarketingConsentConditionConsent';
import { ProfileMergeEnum } from './profileMergeEnum';
import { ProfileMergeQuery } from './profileMergeQuery';
import { ProfileMergeQueryResourceObject } from './profileMergeQueryResourceObject';
import { ProfileMergeQueryResourceObjectRelationships } from './profileMergeQueryResourceObjectRelationships';
import { ProfileMergeQueryResourceObjectRelationshipsProfiles } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import { ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import { ProfileMeta } from './profileMeta';
import { ProfileMetaPatchProperties } from './profileMetaPatchProperties';
import { ProfileMetricFunnelSteps } from './profileMetricFunnelSteps';
import { ProfileMetricPropertyFilter } from './profileMetricPropertyFilter';
import { ProfileMetricPropertyFilterFilter } from './profileMetricPropertyFilterFilter';
import { ProfileModificationMethodFilter } from './profileModificationMethodFilter';
import { ProfileNoGroupMembershipCondition } from './profileNoGroupMembershipCondition';
import { ProfileNotInFlowCondition } from './profileNotInFlowCondition';
import { ProfileOperationDelete } from './profileOperationDelete';
import { ProfileOperationUpdateOrCreateBoolean } from './profileOperationUpdateOrCreateBoolean';
import { ProfileOperationUpdateOrCreateDate } from './profileOperationUpdateOrCreateDate';
import { ProfileOperationUpdateOrCreateList } from './profileOperationUpdateOrCreateList';
import { ProfileOperationUpdateOrCreateNumeric } from './profileOperationUpdateOrCreateNumeric';
import { ProfileOperationUpdateOrCreateString } from './profileOperationUpdateOrCreateString';
import { ProfilePartialUpdateQuery } from './profilePartialUpdateQuery';
import { ProfilePartialUpdateQueryResourceObject } from './profilePartialUpdateQueryResourceObject';
import { ProfilePermissionsCondition } from './profilePermissionsCondition';
import { ProfilePermissionsConditionPermission } from './profilePermissionsConditionPermission';
import { ProfilePostalCodeDistanceCondition } from './profilePostalCodeDistanceCondition';
import { ProfilePostalCodeDistanceConditionFilter } from './profilePostalCodeDistanceConditionFilter';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityCondition } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import { ProfilePredictiveAnalyticsChannelAffinityPriorityFilter } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import { ProfilePredictiveAnalyticsChannelAffinityRankCondition } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import { ProfilePredictiveAnalyticsChannelAffinityRankFilter } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import { ProfilePredictiveAnalyticsDateCondition } from './profilePredictiveAnalyticsDateCondition';
import { ProfilePredictiveAnalyticsNumericCondition } from './profilePredictiveAnalyticsNumericCondition';
import { ProfilePredictiveAnalyticsStringCondition } from './profilePredictiveAnalyticsStringCondition';
import { ProfilePredictiveAnalyticsStringFilter } from './profilePredictiveAnalyticsStringFilter';
import { ProfilePropertyCondition } from './profilePropertyCondition';
import { ProfilePropertyConditionFilter } from './profilePropertyConditionFilter';
import { ProfilePropertyDateTrigger } from './profilePropertyDateTrigger';
import { ProfileRandomSampleCondition } from './profileRandomSampleCondition';
import { ProfileRegionCondition } from './profileRegionCondition';
import { ProfileResponseObjectResource } from './profileResponseObjectResource';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { ProfileResponseObjectResourceExtended } from './profileResponseObjectResourceExtended';
import { ProfileResponseObjectResourceExtendedAttributes } from './profileResponseObjectResourceExtendedAttributes';
import { ProfileSubscriptionBulkCreateJobEnum } from './profileSubscriptionBulkCreateJobEnum';
import { ProfileSubscriptionBulkDeleteJobEnum } from './profileSubscriptionBulkDeleteJobEnum';
import { ProfileSubscriptionCreateQueryResourceObject } from './profileSubscriptionCreateQueryResourceObject';
import { ProfileSubscriptionCreateQueryResourceObjectAttributes } from './profileSubscriptionCreateQueryResourceObjectAttributes';
import { ProfileSubscriptionDeleteQueryResourceObject } from './profileSubscriptionDeleteQueryResourceObject';
import { ProfileSubscriptionDeleteQueryResourceObjectAttributes } from './profileSubscriptionDeleteQueryResourceObjectAttributes';
import { ProfileSuppressionBulkCreateJobEnum } from './profileSuppressionBulkCreateJobEnum';
import { ProfileSuppressionBulkDeleteJobEnum } from './profileSuppressionBulkDeleteJobEnum';
import { ProfileSuppressionCreateQueryResourceObject } from './profileSuppressionCreateQueryResourceObject';
import { ProfileSuppressionCreateQueryResourceObjectAttributes } from './profileSuppressionCreateQueryResourceObjectAttributes';
import { ProfileSuppressionDeleteQueryResourceObject } from './profileSuppressionDeleteQueryResourceObject';
import { ProfileSuppressionDeleteQueryResourceObjectAttributes } from './profileSuppressionDeleteQueryResourceObjectAttributes';
import { ProfileUpsertQuery } from './profileUpsertQuery';
import { ProfileUpsertQueryResourceObject } from './profileUpsertQueryResourceObject';
import { ProfileUpsertQueryResourceObjectAttributes } from './profileUpsertQueryResourceObjectAttributes';
import { PromotionalSMSSubscription } from './promotionalSMSSubscription';
import { Property } from './property';
import { PropertyOption } from './propertyOption';
import { ProvidedLandlineMethodFilter } from './providedLandlineMethodFilter';
import { ProvidedNoAgeMethodFilter } from './providedNoAgeMethodFilter';
import { PushActionButton } from './pushActionButton';
import { PushChannel } from './pushChannel';
import { PushMarketing } from './pushMarketing';
import { PushOnOpenApp } from './pushOnOpenApp';
import { PushOnOpenDeepLink } from './pushOnOpenDeepLink';
import { PushProfileUpsertQueryResourceObject } from './pushProfileUpsertQueryResourceObject';
import { PushProfileUpsertQueryResourceObjectAttributes } from './pushProfileUpsertQueryResourceObjectAttributes';
import { PushSendOptions } from './pushSendOptions';
import { PushSubscriptionParameters } from './pushSubscriptionParameters';
import { PushTokenCreateQuery } from './pushTokenCreateQuery';
import { PushTokenCreateQueryResourceObject } from './pushTokenCreateQueryResourceObject';
import { PushTokenCreateQueryResourceObjectAttributes } from './pushTokenCreateQueryResourceObjectAttributes';
import { PushTokenCreateQueryResourceObjectAttributesProfile } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import { PushTokenDeviceMetadata } from './pushTokenDeviceMetadata';
import { PushTokenEntry } from './pushTokenEntry';
import { PushTokenEnum } from './pushTokenEnum';
import { PushTokenResponseObjectResource } from './pushTokenResponseObjectResource';
import { PushTokenResponseObjectResourceAttributes } from './pushTokenResponseObjectResourceAttributes';
import { PushUnsubscriptionParameters } from './pushUnsubscriptionParameters';
import { QuoteStyle } from './quoteStyle';
import { RadioButtons } from './radioButtons';
import { RadioButtonsProperties } from './radioButtonsProperties';
import { RadioButtonsStyles } from './radioButtonsStyles';
import { RatingStyle } from './ratingStyle';
import { RecordedDateFilter } from './recordedDateFilter';
import { Redirect } from './redirect';
import { RedirectProperties } from './redirectProperties';
import { ReentryCriteria } from './reentryCriteria';
import { RejectReasonFake } from './rejectReasonFake';
import { RejectReasonMisleading } from './rejectReasonMisleading';
import { RejectReasonOther } from './rejectReasonOther';
import { RejectReasonPrivateInformation } from './rejectReasonPrivateInformation';
import { RejectReasonProfanity } from './rejectReasonProfanity';
import { RejectReasonUnrelated } from './rejectReasonUnrelated';
import { RelationshipLinks } from './relationshipLinks';
import { RelativeAnniversaryDateFilter } from './relativeAnniversaryDateFilter';
import { RelativeDateOperatorBaseRelativeDateFilter } from './relativeDateOperatorBaseRelativeDateFilter';
import { RelativeDateRangeFilter } from './relativeDateRangeFilter';
import { RenderOptions } from './renderOptions';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { ResendOptInCode } from './resendOptInCode';
import { Review } from './review';
import { ReviewBlockData } from './reviewBlockData';
import { ReviewBlockDataProperties } from './reviewBlockDataProperties';
import { ReviewBlockStyles } from './reviewBlockStyles';
import { ReviewBlockV0 } from './reviewBlockV0';
import { ReviewBlockV1 } from './reviewBlockV1';
import { ReviewEnum } from './reviewEnum';
import { ReviewPatchQuery } from './reviewPatchQuery';
import { ReviewPatchQueryResourceObject } from './reviewPatchQueryResourceObject';
import { ReviewPatchQueryResourceObjectAttributes } from './reviewPatchQueryResourceObjectAttributes';
import { ReviewPatchQueryResourceObjectAttributesStatus } from './reviewPatchQueryResourceObjectAttributesStatus';
import { ReviewProductDTO } from './reviewProductDTO';
import { ReviewProperties } from './reviewProperties';
import { ReviewPublicReply } from './reviewPublicReply';
import { ReviewResponseDTOObjectResource } from './reviewResponseDTOObjectResource';
import { ReviewResponseDTOObjectResourceAttributes } from './reviewResponseDTOObjectResourceAttributes';
import { ReviewResponseDTOObjectResourceAttributesStatus } from './reviewResponseDTOObjectResourceAttributesStatus';
import { ReviewStatusFeatured } from './reviewStatusFeatured';
import { ReviewStatusPending } from './reviewStatusPending';
import { ReviewStatusPublished } from './reviewStatusPublished';
import { ReviewStatusRejected } from './reviewStatusRejected';
import { ReviewStatusRejectedRejectionReason } from './reviewStatusRejectedRejectionReason';
import { ReviewStatusUnpublished } from './reviewStatusUnpublished';
import { ReviewStyles } from './reviewStyles';
import { ReviewerNameStyle } from './reviewerNameStyle';
import { RichTextMargin } from './richTextMargin';
import { RichTextStyle } from './richTextStyle';
import { RichTextStyles } from './richTextStyles';
import { RowData } from './rowData';
import { RowStyles } from './rowStyles';
import { RowV0 } from './rowV0';
import { RowV0BlocksInner } from './rowV0BlocksInner';
import { RowV1 } from './rowV1';
import { SMSChannel } from './sMSChannel';
import { SMSConsentCheckbox } from './sMSConsentCheckbox';
import { SMSConsentCheckboxProperties } from './sMSConsentCheckboxProperties';
import { SMSConsentCheckboxStyles } from './sMSConsentCheckboxStyles';
import { SMSContent } from './sMSContent';
import { SMSContentCreate } from './sMSContentCreate';
import { SMSContentSubObject } from './sMSContentSubObject';
import { SMSDisclosure } from './sMSDisclosure';
import { SMSDisclosureAccountDefault } from './sMSDisclosureAccountDefault';
import { SMSDisclosureCustom } from './sMSDisclosureCustom';
import { SMSDisclosureProperties } from './sMSDisclosureProperties';
import { SMSDisclosurePropertiesContent } from './sMSDisclosurePropertiesContent';
import { SMSDisclosureStyles } from './sMSDisclosureStyles';
import { SMSDisclosureTextStyle } from './sMSDisclosureTextStyle';
import { SMSMarketing } from './sMSMarketing';
import { SMSMessageDefinition } from './sMSMessageDefinition';
import { SMSMessageDefinitionCreate } from './sMSMessageDefinitionCreate';
import { SMSSendOptions } from './sMSSendOptions';
import { SMSSubscriptionParameters } from './sMSSubscriptionParameters';
import { SMSTransactional } from './sMSTransactional';
import { SMSUnsubscriptionParameters } from './sMSUnsubscriptionParameters';
import { Scroll } from './scroll';
import { ScrollProperties } from './scrollProperties';
import { SectionData } from './sectionData';
import { SectionProperties } from './sectionProperties';
import { SectionStyles } from './sectionStyles';
import { SectionV0 } from './sectionV0';
import { SectionV1 } from './sectionV1';
import { SegmentCreateQuery } from './segmentCreateQuery';
import { SegmentCreateQueryResourceObject } from './segmentCreateQueryResourceObject';
import { SegmentCreateQueryResourceObjectAttributes } from './segmentCreateQueryResourceObjectAttributes';
import { SegmentDefinition } from './segmentDefinition';
import { SegmentEnum } from './segmentEnum';
import { SegmentListResponseObjectResource } from './segmentListResponseObjectResource';
import { SegmentListResponseObjectResourceAttributes } from './segmentListResponseObjectResourceAttributes';
import { SegmentMemberResponseObjectResourceAttributes } from './segmentMemberResponseObjectResourceAttributes';
import { SegmentMemberResponseObjectResourceExtended } from './segmentMemberResponseObjectResourceExtended';
import { SegmentMemberResponseObjectResourceExtendedAttributes } from './segmentMemberResponseObjectResourceExtendedAttributes';
import { SegmentPartialUpdateQuery } from './segmentPartialUpdateQuery';
import { SegmentPartialUpdateQueryResourceObject } from './segmentPartialUpdateQueryResourceObject';
import { SegmentPartialUpdateQueryResourceObjectAttributes } from './segmentPartialUpdateQueryResourceObjectAttributes';
import { SegmentResponseObjectResource } from './segmentResponseObjectResource';
import { SegmentRetrieveResponseObjectResourceAttributes } from './segmentRetrieveResponseObjectResourceAttributes';
import { SegmentRetrieveResponseObjectResourceExtended } from './segmentRetrieveResponseObjectResourceExtended';
import { SegmentRetrieveResponseObjectResourceExtendedAttributes } from './segmentRetrieveResponseObjectResourceExtendedAttributes';
import { SegmentSeriesReportEnum } from './segmentSeriesReportEnum';
import { SegmentSeriesRequestDTO } from './segmentSeriesRequestDTO';
import { SegmentSeriesRequestDTOResourceObject } from './segmentSeriesRequestDTOResourceObject';
import { SegmentSeriesRequestDTOResourceObjectAttributes } from './segmentSeriesRequestDTOResourceObjectAttributes';
import { SegmentTrigger } from './segmentTrigger';
import { SegmentValuesReportEnum } from './segmentValuesReportEnum';
import { SegmentValuesRequestDTO } from './segmentValuesRequestDTO';
import { SegmentValuesRequestDTOResourceObject } from './segmentValuesRequestDTOResourceObject';
import { SegmentValuesRequestDTOResourceObjectAttributes } from './segmentValuesRequestDTOResourceObjectAttributes';
import { SegmentValuesRequestDTOResourceObjectAttributesTimeframe } from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
import { SegmentsProfileMetricCondition } from './segmentsProfileMetricCondition';
import { SegmentsProfileMetricConditionTimeframeFilter } from './segmentsProfileMetricConditionTimeframeFilter';
import { SegmentsProfileMetricFunnelCondition } from './segmentsProfileMetricFunnelCondition';
import { SegmentsProfileMetricFunnelConditionTimeframeFilter } from './segmentsProfileMetricFunnelConditionTimeframeFilter';
import { SendEmailAction } from './sendEmailAction';
import { SendEmailActionData } from './sendEmailActionData';
import { SendInternalAlertAction } from './sendInternalAlertAction';
import { SendInternalAlertActionData } from './sendInternalAlertActionData';
import { SendPushNotificationAction } from './sendPushNotificationAction';
import { SendPushNotificationActionContentExperimentActionData } from './sendPushNotificationActionContentExperimentActionData';
import { SendPushNotificationActionCurrentExperiment } from './sendPushNotificationActionCurrentExperiment';
import { SendPushNotificationActionData } from './sendPushNotificationActionData';
import { SendSmsAction } from './sendSmsAction';
import { SendSmsActionData } from './sendSmsActionData';
import { SendTime } from './sendTime';
import { SendTimeSubObject } from './sendTimeSubObject';
import { SendWebhookAction } from './sendWebhookAction';
import { SendWebhookActionData } from './sendWebhookActionData';
import { SendWhatsAppAction } from './sendWhatsAppAction';
import { SendWhatsAppActionData } from './sendWhatsAppActionData';
import { SeriesData } from './seriesData';
import { ServerBISSubscriptionCreateQuery } from './serverBISSubscriptionCreateQuery';
import { ServerBISSubscriptionCreateQueryResourceObject } from './serverBISSubscriptionCreateQueryResourceObject';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributes } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import { ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationships } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import { ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import { SftpMethodFilter } from './sftpMethodFilter';
import { ShopifyIntegrationFilter } from './shopifyIntegrationFilter';
import { ShopifyIntegrationMethodFilter } from './shopifyIntegrationMethodFilter';
import { SideImageSettings } from './sideImageSettings';
import { SignupCounter } from './signupCounter';
import { SignupCounterProperties } from './signupCounterProperties';
import { SignupCounterStyles } from './signupCounterStyles';
import { SinceFlowStartDateFilter } from './sinceFlowStartDateFilter';
import { SkipToSuccess } from './skipToSuccess';
import { SmartSendTimeStrategy } from './smartSendTimeStrategy';
import { SocialBlockData } from './socialBlockData';
import { SocialBlockProperties } from './socialBlockProperties';
import { SocialBlockStyles } from './socialBlockStyles';
import { SocialBlockV0 } from './socialBlockV0';
import { SocialBlockV1 } from './socialBlockV1';
import { SocialBlockV1SubblocksInner } from './socialBlockV1SubblocksInner';
import { SocialIconSubBlock } from './socialIconSubBlock';
import { SocialSpacerSubBlock } from './socialSpacerSubBlock';
import { SpacerBlockData } from './spacerBlockData';
import { SpacerBlockStyles } from './spacerBlockStyles';
import { SpacerBlockV0 } from './spacerBlockV0';
import { SpacerBlockV1 } from './spacerBlockV1';
import { SpamComplaintMethodFilter } from './spamComplaintMethodFilter';
import { SpinToWin } from './spinToWin';
import { SpinToWinProperties } from './spinToWinProperties';
import { SpinToWinSliceConfig } from './spinToWinSliceConfig';
import { SpinToWinSliceStyle } from './spinToWinSliceStyle';
import { SpinToWinStyles } from './spinToWinStyles';
import { SplitBlockData } from './splitBlockData';
import { SplitBlockStyles } from './splitBlockStyles';
import { SplitBlockV0 } from './splitBlockV0';
import { SplitBlockV1 } from './splitBlockV1';
import { SplitBlockV1SubblocksInner } from './splitBlockV1SubblocksInner';
import { StaticCount } from './staticCount';
import { StaticCouponConfig } from './staticCouponConfig';
import { StaticDateFilter } from './staticDateFilter';
import { StaticDateRangeFilter } from './staticDateRangeFilter';
import { StaticImageBlockProperties } from './staticImageBlockProperties';
import { StaticProductBlockProperties } from './staticProductBlockProperties';
import { StaticReviewBlockProperties } from './staticReviewBlockProperties';
import { StaticSendStrategy } from './staticSendStrategy';
import { StaticSendStrategyOptions } from './staticSendStrategyOptions';
import { StaticTableBlockProperties } from './staticTableBlockProperties';
import { StaticTrackingParam } from './staticTrackingParam';
import { StatusDateFilter } from './statusDateFilter';
import { StatusDateFilterFilter } from './statusDateFilterFilter';
import { Step } from './step';
import { StreetAddress } from './streetAddress';
import { StringArrayOperatorStringArrayFilter } from './stringArrayOperatorStringArrayFilter';
import { StringInArrayFilter } from './stringInArrayFilter';
import { StringOperatorStringFilter } from './stringOperatorStringFilter';
import { StringPhoneOperatorStringArrayFilter } from './stringPhoneOperatorStringArrayFilter';
import { SubmitBackInStock } from './submitBackInStock';
import { SubmitBackInStockProperties } from './submitBackInStockProperties';
import { SubmitOptInCode } from './submitOptInCode';
import { SubscribeViaSMS } from './subscribeViaSMS';
import { SubscribeViaSMSProperties } from './subscribeViaSMSProperties';
import { SubscribeViaWhatsApp } from './subscribeViaWhatsApp';
import { SubscribeViaWhatsAppProperties } from './subscribeViaWhatsAppProperties';
import { SubscribedSMSIsRcsCapableFilter } from './subscribedSMSIsRcsCapableFilter';
import { SubscriptionChannels } from './subscriptionChannels';
import { SubscriptionCreateJobCreateQuery } from './subscriptionCreateJobCreateQuery';
import { SubscriptionCreateJobCreateQueryResourceObject } from './subscriptionCreateJobCreateQueryResourceObject';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributes } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import { SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationships } from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
import { SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
import { SubscriptionDeleteJobCreateQuery } from './subscriptionDeleteJobCreateQuery';
import { SubscriptionDeleteJobCreateQueryResourceObject } from './subscriptionDeleteJobCreateQueryResourceObject';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributes } from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
import { SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationships } from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import { SubscriptionParameters } from './subscriptionParameters';
import { Subscriptions } from './subscriptions';
import { SuppressionCreateJobCreateQuery } from './suppressionCreateJobCreateQuery';
import { SuppressionCreateJobCreateQueryResourceObject } from './suppressionCreateJobCreateQueryResourceObject';
import { SuppressionCreateJobCreateQueryResourceObjectAttributes } from './suppressionCreateJobCreateQueryResourceObjectAttributes';
import { SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles } from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
import { SuppressionCreateJobCreateQueryResourceObjectRelationships } from './suppressionCreateJobCreateQueryResourceObjectRelationships';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsList } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
import { SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
import { SuppressionDeleteJobCreateQuery } from './suppressionDeleteJobCreateQuery';
import { SuppressionDeleteJobCreateQueryResourceObject } from './suppressionDeleteJobCreateQueryResourceObject';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributes } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import { SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles } from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationships } from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
import { SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
import { TableBlockData } from './tableBlockData';
import { TableBlockDataProperties } from './tableBlockDataProperties';
import { TableBlockStyles } from './tableBlockStyles';
import { TableBlockV0 } from './tableBlockV0';
import { TableBlockV1 } from './tableBlockV1';
import { TableBlockV1SubblocksInner } from './tableBlockV1SubblocksInner';
import { TableFallbackHtmlSubBlock } from './tableFallbackHtmlSubBlock';
import { TableFallbackImageSubBlock } from './tableFallbackImageSubBlock';
import { TableFallbackTextSubBlock } from './tableFallbackTextSubBlock';
import { TableHeaderSubBlock } from './tableHeaderSubBlock';
import { TableHtmlSubBlock } from './tableHtmlSubBlock';
import { TableImageSubBlock } from './tableImageSubBlock';
import { TableTextSubBlock } from './tableTextSubBlock';
import { TagCampaignOp } from './tagCampaignOp';
import { TagCampaignOpDataInner } from './tagCampaignOpDataInner';
import { TagCreateQuery } from './tagCreateQuery';
import { TagCreateQueryResourceObject } from './tagCreateQueryResourceObject';
import { TagCreateQueryResourceObjectRelationships } from './tagCreateQueryResourceObjectRelationships';
import { TagCreateQueryResourceObjectRelationshipsTagGroup } from './tagCreateQueryResourceObjectRelationshipsTagGroup';
import { TagCreateQueryResourceObjectRelationshipsTagGroupData } from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
import { TagEnum } from './tagEnum';
import { TagFlowOp } from './tagFlowOp';
import { TagFlowOpDataInner } from './tagFlowOpDataInner';
import { TagGroupCreateQuery } from './tagGroupCreateQuery';
import { TagGroupCreateQueryResourceObject } from './tagGroupCreateQueryResourceObject';
import { TagGroupCreateQueryResourceObjectAttributes } from './tagGroupCreateQueryResourceObjectAttributes';
import { TagGroupEnum } from './tagGroupEnum';
import { TagGroupResponseObjectResource } from './tagGroupResponseObjectResource';
import { TagGroupResponseObjectResourceAttributes } from './tagGroupResponseObjectResourceAttributes';
import { TagGroupUpdateQuery } from './tagGroupUpdateQuery';
import { TagGroupUpdateQueryResourceObject } from './tagGroupUpdateQueryResourceObject';
import { TagGroupUpdateQueryResourceObjectAttributes } from './tagGroupUpdateQueryResourceObjectAttributes';
import { TagListOp } from './tagListOp';
import { TagListOpDataInner } from './tagListOpDataInner';
import { TagResponseObjectResource } from './tagResponseObjectResource';
import { TagResponseObjectResourceAttributes } from './tagResponseObjectResourceAttributes';
import { TagSegmentOp } from './tagSegmentOp';
import { TagSegmentOpDataInner } from './tagSegmentOpDataInner';
import { TagUpdateQuery } from './tagUpdateQuery';
import { TagUpdateQueryResourceObject } from './tagUpdateQueryResourceObject';
import { TargetDateAction } from './targetDateAction';
import { TargetDateActionData } from './targetDateActionData';
import { Teaser } from './teaser';
import { TeaserStyles } from './teaserStyles';
import { TemplateCloneQuery } from './templateCloneQuery';
import { TemplateCloneQueryResourceObject } from './templateCloneQueryResourceObject';
import { TemplateCloneQueryResourceObjectAttributes } from './templateCloneQueryResourceObjectAttributes';
import { TemplateCreateHtmlOrDndQuery } from './templateCreateHtmlOrDndQuery';
import { TemplateCreateHtmlOrDndQueryResourceObject } from './templateCreateHtmlOrDndQueryResourceObject';
import { TemplateCreateHtmlOrDndQueryResourceObjectAttributes } from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
import { TemplateDefinition } from './templateDefinition';
import { TemplateDefinitionStylesInner } from './templateDefinitionStylesInner';
import { TemplateDndResponseObjectResource } from './templateDndResponseObjectResource';
import { TemplateEnum } from './templateEnum';
import { TemplateRenderQuery } from './templateRenderQuery';
import { TemplateRenderQueryResourceObject } from './templateRenderQueryResourceObject';
import { TemplateRenderQueryResourceObjectAttributes } from './templateRenderQueryResourceObjectAttributes';
import { TemplateResponseObjectResource } from './templateResponseObjectResource';
import { TemplateResponseObjectResourceAttributes } from './templateResponseObjectResourceAttributes';
import { TemplateUniversalContentEnum } from './templateUniversalContentEnum';
import { TemplateUpdateHtmlOrDndQuery } from './templateUpdateHtmlOrDndQuery';
import { TemplateUpdateHtmlOrDndQueryResourceObject } from './templateUpdateHtmlOrDndQueryResourceObject';
import { TemplateUpdateHtmlOrDndQueryResourceObjectAttributes } from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
import { Text } from './text';
import { TextBlockDataV0 } from './textBlockDataV0';
import { TextBlockDataV1 } from './textBlockDataV1';
import { TextBlockStylesV0 } from './textBlockStylesV0';
import { TextBlockStylesV1 } from './textBlockStylesV1';
import { TextBlockV0 } from './textBlockV0';
import { TextBlockV1 } from './textBlockV1';
import { TextProperties } from './textProperties';
import { TextStyleStyles } from './textStyleStyles';
import { TextStyleV0 } from './textStyleV0';
import { TextStyleV1 } from './textStyleV1';
import { TextStyles } from './textStyles';
import { ThrottledSendStrategy } from './throttledSendStrategy';
import { TimeDelayAction } from './timeDelayAction';
import { TimeDelayActionData } from './timeDelayActionData';
import { Timeframe } from './timeframe';
import { TrackingParamDTO } from './trackingParamDTO';
import { TrackingParamDTOCampaign } from './trackingParamDTOCampaign';
import { TrackingParamDTOFlow } from './trackingParamDTOFlow';
import { TrackingSettingEnum } from './trackingSettingEnum';
import { TrackingSettingPartialUpdateQuery } from './trackingSettingPartialUpdateQuery';
import { TrackingSettingPartialUpdateQueryResourceObject } from './trackingSettingPartialUpdateQueryResourceObject';
import { TrackingSettingPartialUpdateQueryResourceObjectAttributes } from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
import { TrackingSettingResponseObjectResource } from './trackingSettingResponseObjectResource';
import { TrackingSettingResponseObjectResourceAttributes } from './trackingSettingResponseObjectResourceAttributes';
import { TriggerBranchAction } from './triggerBranchAction';
import { TriggerBranchActionData } from './triggerBranchActionData';
import { TriggerBranchActionDataTriggerFilter } from './triggerBranchActionDataTriggerFilter';
import { TriggerBranchActionDataTriggerFilterConditionGroupsInner } from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
import { TriggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner } from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
import { URLPatterns } from './uRLPatterns';
import { URLPatternsProperties } from './uRLPatternsProperties';
import { UnidentifiedProfiles } from './unidentifiedProfiles';
import { UniqueCouponConfig } from './uniqueCouponConfig';
import { UniversalContentCreateQuery } from './universalContentCreateQuery';
import { UniversalContentCreateQueryResourceObject } from './universalContentCreateQueryResourceObject';
import { UniversalContentCreateQueryResourceObjectAttributes } from './universalContentCreateQueryResourceObjectAttributes';
import { UniversalContentCreateQueryResourceObjectAttributesDefinition } from './universalContentCreateQueryResourceObjectAttributesDefinition';
import { UniversalContentPartialUpdateQuery } from './universalContentPartialUpdateQuery';
import { UniversalContentPartialUpdateQueryResourceObject } from './universalContentPartialUpdateQueryResourceObject';
import { UniversalContentPartialUpdateQueryResourceObjectAttributes } from './universalContentPartialUpdateQueryResourceObjectAttributes';
import { UniversalContentPartialUpdateQueryResourceObjectAttributesDefinition } from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
import { UniversalContentResponseObjectResource } from './universalContentResponseObjectResource';
import { UniversalContentResponseObjectResourceAttributes } from './universalContentResponseObjectResourceAttributes';
import { UniversalContentResponseObjectResourceAttributesDefinition } from './universalContentResponseObjectResourceAttributesDefinition';
import { UnsubscriptionChannels } from './unsubscriptionChannels';
import { UnsubscriptionParameters } from './unsubscriptionParameters';
import { UnsupportedBlock } from './unsupportedBlock';
import { UnsupportedSendStrategy } from './unsupportedSendStrategy';
import { UpdateProfileAction } from './updateProfileAction';
import { UpdateProfileActionData } from './updateProfileActionData';
import { UpdateProfileActionDataProfileOperationsInner } from './updateProfileActionDataProfileOperationsInner';
import { UtmParam } from './utmParam';
import { ValuesData } from './valuesData';
import { VariableTimerConfiguration } from './variableTimerConfiguration';
import { Version } from './version';
import { VersionProperties } from './versionProperties';
import { VersionStyles } from './versionStyles';
import { VersionTriggersInner } from './versionTriggersInner';
import { VideoBlockData } from './videoBlockData';
import { VideoBlockProperties } from './videoBlockProperties';
import { VideoBlockStyles } from './videoBlockStyles';
import { VideoBlockV0 } from './videoBlockV0';
import { VideoBlockV1 } from './videoBlockV1';
import { Visibility } from './visibility';
import { WebFeedCreateQuery } from './webFeedCreateQuery';
import { WebFeedCreateQueryResourceObject } from './webFeedCreateQueryResourceObject';
import { WebFeedCreateQueryResourceObjectAttributes } from './webFeedCreateQueryResourceObjectAttributes';
import { WebFeedEnum } from './webFeedEnum';
import { WebFeedPartialUpdateQuery } from './webFeedPartialUpdateQuery';
import { WebFeedPartialUpdateQueryResourceObject } from './webFeedPartialUpdateQueryResourceObject';
import { WebFeedPartialUpdateQueryResourceObjectAttributes } from './webFeedPartialUpdateQueryResourceObjectAttributes';
import { WebFeedResponseObjectResource } from './webFeedResponseObjectResource';
import { WebFeedResponseObjectResourceAttributes } from './webFeedResponseObjectResourceAttributes';
import { WebhookCreateQuery } from './webhookCreateQuery';
import { WebhookCreateQueryResourceObject } from './webhookCreateQueryResourceObject';
import { WebhookCreateQueryResourceObjectAttributes } from './webhookCreateQueryResourceObjectAttributes';
import { WebhookCreateQueryResourceObjectRelationships } from './webhookCreateQueryResourceObjectRelationships';
import { WebhookCreateQueryResourceObjectRelationshipsWebhookTopics } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
import { WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
import { WebhookEnum } from './webhookEnum';
import { WebhookPartialUpdateQuery } from './webhookPartialUpdateQuery';
import { WebhookPartialUpdateQueryResourceObject } from './webhookPartialUpdateQueryResourceObject';
import { WebhookPartialUpdateQueryResourceObjectAttributes } from './webhookPartialUpdateQueryResourceObjectAttributes';
import { WebhookPartialUpdateQueryResourceObjectRelationships } from './webhookPartialUpdateQueryResourceObjectRelationships';
import { WebhookResponseObjectResource } from './webhookResponseObjectResource';
import { WebhookResponseObjectResourceAttributes } from './webhookResponseObjectResourceAttributes';
import { WebhookTopicEnum } from './webhookTopicEnum';
import { WebhookTopicResponseObjectResource } from './webhookTopicResponseObjectResource';
import { WhatsAppSubscriptionParameters } from './whatsAppSubscriptionParameters';
import { WhatsAppUnsubscriptionParameters } from './whatsAppUnsubscriptionParameters';
import { WhatsappChannel } from './whatsappChannel';
import { WhatsappConversationalChannel } from './whatsappConversationalChannel';
import { WhatsappMarketingChannel } from './whatsappMarketingChannel';
import { WhatsappTransactionalChannel } from './whatsappTransactionalChannel';
import {  } from './aBTestSendStrategy';
import {  } from './aPIJobErrorPayload';
import {  } from './aPIMethodFilter';
import {  } from './abTestAction';
import {  } from './abTestActionData';
import {  } from './abTestActionDataCurrentExperiment';
import {  } from './abTestActionDataMainAction';
import {  } from './accountEnum';
import {  } from './accountResponseObjectResource';
import {  } from './accountResponseObjectResourceAttributes';
import {  } from './actionOutputCondition';
import {  } from './actionOutputConditionConditionGroup';
import {  } from './actionOutputConditionFilter';
import {  } from './actionOutputConditionFilter2';
import {  } from './actionOutputSplitAction';
import {  } from './actionOutputSplitActionData';
import {  } from './additionalField';
import {  } from './afterCloseTimeout';
import {  } from './afterCloseTimeoutProperties';
import {  } from './ageGate';
import {  } from './ageGateProperties';
import {  } from './ageGateStyles';
import {  } from './alltimeDateFilter';
import {  } from './anniversaryDateFilter';
import {  } from './attributionEnum';
import {  } from './attributionResponseObjectResource';
import {  } from './attributionResponseObjectResourceRelationships';
import {  } from './attributionResponseObjectResourceRelationshipsAttributedEvent';
import {  } from './attributionResponseObjectResourceRelationshipsAttributedEventData';
import {  } from './attributionResponseObjectResourceRelationshipsCampaign';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignData';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignMessage';
import {  } from './attributionResponseObjectResourceRelationshipsCampaignMessageData';
import {  } from './attributionResponseObjectResourceRelationshipsEvent';
import {  } from './attributionResponseObjectResourceRelationshipsEventData';
import {  } from './attributionResponseObjectResourceRelationshipsFlow';
import {  } from './attributionResponseObjectResourceRelationshipsFlowData';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessage';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageData';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageVariation';
import {  } from './attributionResponseObjectResourceRelationshipsFlowMessageVariationData';
import {  } from './audiences';
import {  } from './audiencesUpdate';
import {  } from './automaticWinnerSelectionSettings';
import {  } from './backInStock';
import {  } from './backInStockDelayAction';
import {  } from './backInStockDynamicButtonBorderStyles';
import {  } from './backInStockDynamicButtonData';
import {  } from './backInStockDynamicButtonDropShadowStyles';
import {  } from './backInStockDynamicButtonStyles';
import {  } from './backInStockDynamicButtonTextStyles';
import {  } from './backInStockEmailConsentCheckbox';
import {  } from './backInStockEmailConsentCheckboxProperties';
import {  } from './backInStockEmailConsentCheckboxStyles';
import {  } from './backInStockMethodFilter';
import {  } from './backInStockProperties';
import {  } from './backInStockSubscriptionEnum';
import {  } from './backgroundImage';
import {  } from './backgroundImageStyles';
import {  } from './bannerStyles';
import {  } from './baseEventCreateQueryBulkEntryResourceObject';
import {  } from './baseEventCreateQueryBulkEntryResourceObjectAttributes';
import {  } from './baseStyle';
import {  } from './baseStyleProperties';
import {  } from './baseStyleStyles';
import {  } from './blockDisplayOptions';
import {  } from './body';
import {  } from './bodyProperties';
import {  } from './bodyStyles';
import {  } from './booleanBranchLinks';
import {  } from './booleanFilter';
import {  } from './borderStyle';
import {  } from './bounceDateFilter';
import {  } from './bounceDateFilterFilter';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResource';
import {  } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import {  } from './bulkProfileSuppressionsRemoveJobResponseObjectResource';
import {  } from './bulkRemoveMethodFilter';
import {  } from './button';
import {  } from './buttonAction';
import {  } from './buttonBlockData';
import {  } from './buttonBlockProperties';
import {  } from './buttonBlockStyles';
import {  } from './buttonBlockV0';
import {  } from './buttonBlockV1';
import {  } from './buttonDropShadowStyles';
import {  } from './buttonProperties';
import {  } from './buttonStyles';
import {  } from './calendarDateFilter';
import {  } from './campaignCloneQuery';
import {  } from './campaignCloneQueryResourceObject';
import {  } from './campaignCloneQueryResourceObjectAttributes';
import {  } from './campaignCreateQuery';
import {  } from './campaignCreateQueryResourceObject';
import {  } from './campaignCreateQueryResourceObjectAttributes';
import {  } from './campaignCreateQueryResourceObjectAttributesCampaignMessages';
import {  } from './campaignCreateQueryResourceObjectAttributesSendOptions';
import {  } from './campaignCreateQueryResourceObjectAttributesSendStrategy';
import {  } from './campaignEnum';
import {  } from './campaignMessageAssignTemplateQuery';
import {  } from './campaignMessageAssignTemplateQueryResourceObject';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationships';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate';
import {  } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';
import {  } from './campaignMessageCreateQueryResourceObject';
import {  } from './campaignMessageCreateQueryResourceObjectAttributes';
import {  } from './campaignMessageCreateQueryResourceObjectAttributesDefinition';
import {  } from './campaignMessageCreateQueryResourceObjectRelationships';
import {  } from './campaignMessageCreateQueryResourceObjectRelationshipsImage';
import {  } from './campaignMessageCreateQueryResourceObjectRelationshipsImageData';
import {  } from './campaignMessageEnum';
import {  } from './campaignMessageImageUpdateQuery';
import {  } from './campaignMessageImageUpdateQueryData';
import {  } from './campaignMessageIncrement';
import {  } from './campaignMessagePartialUpdateQuery';
import {  } from './campaignMessagePartialUpdateQueryResourceObject';
import {  } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignMessagePartialUpdateQueryResourceObjectAttributesDefinition';
import {  } from './campaignMessageProperty';
import {  } from './campaignMessageResponseObjectResource';
import {  } from './campaignMessageResponseObjectResourceAttributes';
import {  } from './campaignMessageResponseObjectResourceAttributesDefinition';
import {  } from './campaignMessageStaticCount';
import {  } from './campaignPartialUpdateQuery';
import {  } from './campaignPartialUpdateQueryResourceObject';
import {  } from './campaignPartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignPartialUpdateQueryResourceObjectAttributesSendStrategy';
import {  } from './campaignRecipientEstimationEnum';
import {  } from './campaignRecipientEstimationJobCreateQuery';
import {  } from './campaignRecipientEstimationJobCreateQueryResourceObject';
import {  } from './campaignRecipientEstimationJobEnum';
import {  } from './campaignRecipientEstimationJobResponseObjectResource';
import {  } from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
import {  } from './campaignRecipientEstimationResponseObjectResource';
import {  } from './campaignRecipientEstimationResponseObjectResourceAttributes';
import {  } from './campaignResponseObjectResource';
import {  } from './campaignResponseObjectResourceAttributes';
import {  } from './campaignResponseObjectResourceAttributesSendOptions';
import {  } from './campaignResponseObjectResourceAttributesSendStrategy';
import {  } from './campaignResponseObjectResourceAttributesTrackingOptions';
import {  } from './campaignSendJobCreateQuery';
import {  } from './campaignSendJobCreateQueryResourceObject';
import {  } from './campaignSendJobEnum';
import {  } from './campaignSendJobPartialUpdateQuery';
import {  } from './campaignSendJobPartialUpdateQueryResourceObject';
import {  } from './campaignSendJobPartialUpdateQueryResourceObjectAttributes';
import {  } from './campaignSendJobResponseObjectResource';
import {  } from './campaignSendJobResponseObjectResourceAttributes';
import {  } from './campaignTrackingSettingDynamicParam';
import {  } from './campaignTrackingSettingStaticParam';
import {  } from './campaignValuesReportEnum';
import {  } from './campaignValuesRequestDTO';
import {  } from './campaignValuesRequestDTOResourceObject';
import {  } from './campaignValuesRequestDTOResourceObjectAttributes';
import {  } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';
import {  } from './campaignsEmailTrackingOptions';
import {  } from './campaignsEmailTrackingOptionsCustomTrackingParamsInner';
import {  } from './campaignsSMSTrackingOptions';
import {  } from './carrierDeactivationMethodFilter';
import {  } from './cartItemCount';
import {  } from './cartItemCountProperties';
import {  } from './cartProduct';
import {  } from './cartProductProperties';
import {  } from './cartValue';
import {  } from './cartValueProperties';
import {  } from './catalogCategoryBulkCreateJobEnum';
import {  } from './catalogCategoryBulkDeleteJobEnum';
import {  } from './catalogCategoryBulkUpdateJobEnum';
import {  } from './catalogCategoryCreateJobCreateQuery';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObject';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryCreateJobResponseObjectResource';
import {  } from './catalogCategoryCreateQuery';
import {  } from './catalogCategoryCreateQueryResourceObject';
import {  } from './catalogCategoryCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryCreateQueryResourceObjectRelationships';
import {  } from './catalogCategoryCreateQueryResourceObjectRelationshipsItems';
import {  } from './catalogCategoryDeleteJobCreateQuery';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObject';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryDeleteJobResponseObjectResource';
import {  } from './catalogCategoryDeleteQueryResourceObject';
import {  } from './catalogCategoryEnum';
import {  } from './catalogCategoryItemOp';
import {  } from './catalogCategoryItemOpDataInner';
import {  } from './catalogCategoryResponseObjectResource';
import {  } from './catalogCategoryResponseObjectResourceAttributes';
import {  } from './catalogCategoryUpdateJobCreateQuery';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObject';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories';
import {  } from './catalogCategoryUpdateJobResponseObjectResource';
import {  } from './catalogCategoryUpdateQuery';
import {  } from './catalogCategoryUpdateQueryResourceObject';
import {  } from './catalogCategoryUpdateQueryResourceObjectAttributes';
import {  } from './catalogItemBulkCreateJobEnum';
import {  } from './catalogItemBulkDeleteJobEnum';
import {  } from './catalogItemBulkUpdateJobEnum';
import {  } from './catalogItemCategoryOp';
import {  } from './catalogItemCreateJobCreateQuery';
import {  } from './catalogItemCreateJobCreateQueryResourceObject';
import {  } from './catalogItemCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemCreateJobResponseObjectResource';
import {  } from './catalogItemCreateQuery';
import {  } from './catalogItemCreateQueryResourceObject';
import {  } from './catalogItemCreateQueryResourceObjectAttributes';
import {  } from './catalogItemCreateQueryResourceObjectRelationships';
import {  } from './catalogItemCreateQueryResourceObjectRelationshipsCategories';
import {  } from './catalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner';
import {  } from './catalogItemDeleteJobCreateQuery';
import {  } from './catalogItemDeleteJobCreateQueryResourceObject';
import {  } from './catalogItemDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemDeleteJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemDeleteJobResponseObjectResource';
import {  } from './catalogItemDeleteQueryResourceObject';
import {  } from './catalogItemEnum';
import {  } from './catalogItemResponseObjectResource';
import {  } from './catalogItemResponseObjectResourceAttributes';
import {  } from './catalogItemUpdateJobCreateQuery';
import {  } from './catalogItemUpdateJobCreateQueryResourceObject';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogItemUpdateJobCreateQueryResourceObjectAttributesItems';
import {  } from './catalogItemUpdateJobResponseObjectResource';
import {  } from './catalogItemUpdateQuery';
import {  } from './catalogItemUpdateQueryResourceObject';
import {  } from './catalogItemUpdateQueryResourceObjectAttributes';
import {  } from './catalogVariantBulkCreateJobEnum';
import {  } from './catalogVariantBulkDeleteJobEnum';
import {  } from './catalogVariantBulkUpdateJobEnum';
import {  } from './catalogVariantCreateJobCreateQuery';
import {  } from './catalogVariantCreateJobCreateQueryResourceObject';
import {  } from './catalogVariantCreateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantCreateJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantCreateJobResponseObjectResource';
import {  } from './catalogVariantCreateQuery';
import {  } from './catalogVariantCreateQueryResourceObject';
import {  } from './catalogVariantCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantCreateQueryResourceObjectRelationships';
import {  } from './catalogVariantCreateQueryResourceObjectRelationshipsItem';
import {  } from './catalogVariantCreateQueryResourceObjectRelationshipsItemData';
import {  } from './catalogVariantDeleteJobCreateQuery';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObject';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantDeleteJobResponseObjectResource';
import {  } from './catalogVariantDeleteQueryResourceObject';
import {  } from './catalogVariantEnum';
import {  } from './catalogVariantResponseObjectResource';
import {  } from './catalogVariantResponseObjectResourceAttributes';
import {  } from './catalogVariantUpdateJobCreateQuery';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObject';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributes';
import {  } from './catalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants';
import {  } from './catalogVariantUpdateJobResponseObjectResource';
import {  } from './catalogVariantUpdateQuery';
import {  } from './catalogVariantUpdateQueryResourceObject';
import {  } from './catalogVariantUpdateQueryResourceObjectAttributes';
import {  } from './channel';
import {  } from './channelProperties';
import {  } from './channelSettings';
import {  } from './checkboxes';
import {  } from './checkboxesProperties';
import {  } from './checkboxesStyles';
import {  } from './checkoutMethodFilter';
import {  } from './close';
import {  } from './closeButtonStyle';
import {  } from './closeProperties';
import {  } from './codeAction';
import {  } from './collectionLinks';
import {  } from './columnStyles';
import {  } from './columnV0';
import {  } from './columnV1';
import {  } from './columnV1BlocksInner';
import {  } from './conditionGroup';
import {  } from './conditionGroupConditionsInner';
import {  } from './conditionalBranchAction';
import {  } from './conditionalBranchActionData';
import {  } from './conditionalBranchActionDataProfileFilter';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInner';
import {  } from './conditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner';
import {  } from './constantContactIntegrationFilter';
import {  } from './constantContactIntegrationMethodFilter';
import {  } from './contactInformation';
import {  } from './contentExperimentAction';
import {  } from './contentRepeatV0';
import {  } from './contentRepeatV1';
import {  } from './conversationEnum';
import {  } from './conversationMessageCreateQuery';
import {  } from './conversationMessageCreateQueryResourceObject';
import {  } from './conversationMessageCreateQueryResourceObjectAttributes';
import {  } from './conversationMessageCreateQueryResourceObjectRelationships';
import {  } from './conversationMessageCreateQueryResourceObjectRelationshipsConversation';
import {  } from './conversationMessageCreateQueryResourceObjectRelationshipsConversationData';
import {  } from './conversationMessageEnum';
import {  } from './conversationResponseObjectResource';
import {  } from './countdownDelayAction';
import {  } from './countdownDelayActionData';
import {  } from './countdownTimer';
import {  } from './countdownTimerProperties';
import {  } from './countdownTimerPropertiesConfiguration';
import {  } from './countdownTimerStyles';
import {  } from './coupon';
import {  } from './couponBlockData';
import {  } from './couponBlockProperties';
import {  } from './couponBlockStyles';
import {  } from './couponBlockV0';
import {  } from './couponBlockV1';
import {  } from './couponCodeBulkCreateJobEnum';
import {  } from './couponCodeCreateJobCreateQuery';
import {  } from './couponCodeCreateJobCreateQueryResourceObject';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes';
import {  } from './couponCodeCreateJobResponseObjectResource';
import {  } from './couponCodeCreateJobResponseObjectResourceAttributes';
import {  } from './couponCodeCreateQuery';
import {  } from './couponCodeCreateQueryResourceObject';
import {  } from './couponCodeCreateQueryResourceObjectAttributes';
import {  } from './couponCodeCreateQueryResourceObjectRelationships';
import {  } from './couponCodeCreateQueryResourceObjectRelationshipsCoupon';
import {  } from './couponCodeEnum';
import {  } from './couponCodeResponseObjectResource';
import {  } from './couponCodeResponseObjectResourceAttributes';
import {  } from './couponCodeUpdateQuery';
import {  } from './couponCodeUpdateQueryResourceObject';
import {  } from './couponCodeUpdateQueryResourceObjectAttributes';
import {  } from './couponCreateQuery';
import {  } from './couponCreateQueryResourceObject';
import {  } from './couponEnum';
import {  } from './couponProperties';
import {  } from './couponPropertiesCoupon';
import {  } from './couponResponseObjectResource';
import {  } from './couponResponseObjectResourceAttributes';
import {  } from './couponStyles';
import {  } from './couponUpdateQuery';
import {  } from './couponUpdateQueryResourceObject';
import {  } from './couponUpdateQueryResourceObjectAttributes';
import {  } from './customJavascript';
import {  } from './customMetricCondition';
import {  } from './customMetricConditionFilter';
import {  } from './customMetricCreateQuery';
import {  } from './customMetricCreateQueryResourceObject';
import {  } from './customMetricCreateQueryResourceObjectAttributes';
import {  } from './customMetricDefinition';
import {  } from './customMetricEnum';
import {  } from './customMetricGroup';
import {  } from './customMetricPartialUpdateQuery';
import {  } from './customMetricPartialUpdateQueryResourceObject';
import {  } from './customMetricPartialUpdateQueryResourceObjectAttributes';
import {  } from './customMetricResponseObjectResource';
import {  } from './customMetricResponseObjectResourceAttributes';
import {  } from './customObjectPropertyCondition';
import {  } from './customObjectPropertyConditionFilter';
import {  } from './customObjectTriggerCondition';
import {  } from './customObjectTriggerConditionFilter';
import {  } from './customSourceFilter';
import {  } from './customTimeframe';
import {  } from './customTrackingParamDTO';
import {  } from './dataPrivacyCreateDeletionJobQuery';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObject';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import {  } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile';
import {  } from './dataPrivacyDeletionJobEnum';
import {  } from './dataPrivacyProfileQueryResourceObject';
import {  } from './dataPrivacyProfileQueryResourceObjectAttributes';
import {  } from './dataSourceCreateQuery';
import {  } from './dataSourceCreateQueryResourceObject';
import {  } from './dataSourceCreateQueryResourceObjectAttributes';
import {  } from './dataSourceEnum';
import {  } from './dataSourceRecordBulkCreateJobCreateQuery';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObject';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource';
import {  } from './dataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData';
import {  } from './dataSourceRecordBulkCreateJobEnum';
import {  } from './dataSourceRecordCreateJobCreateQuery';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObject';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributes';
import {  } from './dataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord';
import {  } from './dataSourceRecordCreateJobEnum';
import {  } from './dataSourceRecordEnum';
import {  } from './dataSourceRecordResourceObject';
import {  } from './dataSourceRecordResourceObjectAttributes';
import {  } from './dataSourceResponseObjectResource';
import {  } from './dataSourceResponseObjectResourceAttributes';
import {  } from './dataWarehouseImportMethodFilter';
import {  } from './dateProperties';
import {  } from './dateStyles';
import {  } from './delay';
import {  } from './delayProperties';
import {  } from './deleteTagGroupResponse';
import {  } from './device';
import {  } from './deviceMetadata';
import {  } from './deviceProperties';
import {  } from './displayOptions';
import {  } from './doubleOptinFilter';
import {  } from './dropShadow';
import {  } from './dropShadowBlockData';
import {  } from './dropShadowBlockStyles';
import {  } from './dropShadowBlockV0';
import {  } from './dropShadowBlockV1';
import {  } from './dropdown';
import {  } from './dropdownProperties';
import {  } from './dropdownStyles';
import {  } from './dynamicButton';
import {  } from './dynamicImageBlockProperties';
import {  } from './dynamicProductBlockProperties';
import {  } from './dynamicReviewBlockProperties';
import {  } from './dynamicTableBlockProperties';
import {  } from './dynamicTrackingParam';
import {  } from './effectiveDateFilter';
import {  } from './email';
import {  } from './emailChannel';
import {  } from './emailContent';
import {  } from './emailContentSubObject';
import {  } from './emailMarketing';
import {  } from './emailMarketingListSuppression';
import {  } from './emailMarketingSuppression';
import {  } from './emailMessageDefinition';
import {  } from './emailProperties';
import {  } from './emailSendOptions';
import {  } from './emailStyles';
import {  } from './emailSubscriptionParameters';
import {  } from './emailUnsubscriptionParameters';
import {  } from './encodedFormResponseObjectResource';
import {  } from './encodedFormResponseObjectResourceAttributes';
import {  } from './equalsStringFilter';
import {  } from './errorMessages';
import {  } from './errorSource';
import {  } from './eventBulkCreateEnum';
import {  } from './eventBulkCreateJobEnum';
import {  } from './eventCreateQueryV2';
import {  } from './eventCreateQueryV2ResourceObject';
import {  } from './eventCreateQueryV2ResourceObjectAttributes';
import {  } from './eventCreateQueryV2ResourceObjectAttributesMetric';
import {  } from './eventCreateQueryV2ResourceObjectAttributesProfile';
import {  } from './eventEnum';
import {  } from './eventProfileCreateQueryResourceObject';
import {  } from './eventProfileCreateQueryResourceObjectAttributes';
import {  } from './eventResponseObjectResource';
import {  } from './eventResponseObjectResourceAttributes';
import {  } from './eventsBulkCreateJob';
import {  } from './eventsBulkCreateJobResourceObject';
import {  } from './eventsBulkCreateJobResourceObjectAttributes';
import {  } from './eventsBulkCreateJobResourceObjectAttributesEventsBulkCreate';
import {  } from './eventsBulkCreateQueryResourceObject';
import {  } from './eventsBulkCreateQueryResourceObjectAttributes';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesEvents';
import {  } from './eventsBulkCreateQueryResourceObjectAttributesProfile';
import {  } from './existenceOperatorExistenceFilter';
import {  } from './exitIntent';
import {  } from './explicitlyReachable';
import {  } from './explicitlyReachableFiltersInner';
import {  } from './explicitlyUnreachable';
import {  } from './failedAgeGateMethodFilter';
import {  } from './fixedTimerConfiguration';
import {  } from './flowActionEncodedResponseObjectResource';
import {  } from './flowActionEncodedResponseObjectResourceAttributes';
import {  } from './flowActionEncodedResponseObjectResourceAttributesDefinition';
import {  } from './flowActionEnum';
import {  } from './flowActionUpdateQuery';
import {  } from './flowActionUpdateQueryResourceObject';
import {  } from './flowActionUpdateQueryResourceObjectAttributes';
import {  } from './flowActionUpdateQueryResourceObjectAttributesDefinition';
import {  } from './flowCreateQuery';
import {  } from './flowCreateQueryResourceObject';
import {  } from './flowCreateQueryResourceObjectAttributes';
import {  } from './flowDefinition';
import {  } from './flowDefinitionActionsInner';
import {  } from './flowDefinitionProfileFilter';
import {  } from './flowDefinitionProfileFilterConditionGroupsInner';
import {  } from './flowDefinitionProfileFilterConditionGroupsInnerConditionsInner';
import {  } from './flowDefinitionTriggersInner';
import {  } from './flowEmail';
import {  } from './flowEmailAdditionalFilters';
import {  } from './flowEmailAdditionalFiltersConditionGroupsInner';
import {  } from './flowEmailAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowEnum';
import {  } from './flowInternalAlert';
import {  } from './flowMessageEncodedResponseObjectResource';
import {  } from './flowMessageEncodedResponseObjectResourceAttributes';
import {  } from './flowMessageEncodedResponseObjectResourceAttributesDefinition';
import {  } from './flowMessageEnum';
import {  } from './flowPushNotification';
import {  } from './flowPushNotificationAdditionalFilters';
import {  } from './flowPushNotificationAdditionalFiltersConditionGroupsInner';
import {  } from './flowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowPushNotificationBadgeOptions';
import {  } from './flowResponseObjectResource';
import {  } from './flowResponseObjectResourceAttributes';
import {  } from './flowSeriesReportEnum';
import {  } from './flowSeriesRequestDTO';
import {  } from './flowSeriesRequestDTOResourceObject';
import {  } from './flowSeriesRequestDTOResourceObjectAttributes';
import {  } from './flowSms';
import {  } from './flowSmsAdditionalFilters';
import {  } from './flowSmsAdditionalFiltersConditionGroupsInner';
import {  } from './flowSmsAdditionalFiltersConditionGroupsInnerConditionsInner';
import {  } from './flowTrackingSettingDynamicParam';
import {  } from './flowTrackingSettingStaticParam';
import {  } from './flowUpdateQuery';
import {  } from './flowUpdateQueryResourceObject';
import {  } from './flowUpdateQueryResourceObjectAttributes';
import {  } from './flowV2ResponseObjectResourceAttributes';
import {  } from './flowV2ResponseObjectResourceExtended';
import {  } from './flowV2ResponseObjectResourceExtendedAttributes';
import {  } from './flowValuesReportEnum';
import {  } from './flowValuesRequestDTO';
import {  } from './flowValuesRequestDTOResourceObject';
import {  } from './flowValuesRequestDTOResourceObjectAttributes';
import {  } from './flowWebhook';
import {  } from './flowWhatsApp';
import {  } from './flowsProfileMetricCondition';
import {  } from './flowsProfileMetricConditionTimeframeFilter';
import {  } from './formCreateQuery';
import {  } from './formCreateQueryResourceObject';
import {  } from './formCreateQueryResourceObjectAttributes';
import {  } from './formDefinition';
import {  } from './formEnum';
import {  } from './formMethodFilter';
import {  } from './formResponseObjectResource';
import {  } from './formResponseObjectResourceAttributes';
import {  } from './formSeriesReportEnum';
import {  } from './formSeriesRequestDTO';
import {  } from './formSeriesRequestDTOResourceObject';
import {  } from './formSeriesRequestDTOResourceObjectAttributes';
import {  } from './formSubscribeFilter';
import {  } from './formValuesReportEnum';
import {  } from './formValuesRequestDTO';
import {  } from './formValuesRequestDTOResourceObject';
import {  } from './formValuesRequestDTOResourceObjectAttributes';
import {  } from './formVersionABTest';
import {  } from './formVersionEnum';
import {  } from './formVersionResponseObjectResource';
import {  } from './formVersionResponseObjectResourceAttributes';
import {  } from './getAccountResponse';
import {  } from './getAccountResponseCollection';
import {  } from './getAccounts4XXResponse';
import {  } from './getAccounts4XXResponseErrorsInner';
import {  } from './getAccounts4XXResponseErrorsInnerSource';
import {  } from './getBulkProfileSuppressionsCreateJobResponse';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollection';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInner';
import {  } from './getBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getBulkProfileSuppressionsRemoveJobResponse';
import {  } from './getBulkProfileSuppressionsRemoveJobResponseCollection';
import {  } from './getBulkProfileSuppressionsRemoveJobResponseCollectionDataInner';
import {  } from './getCampaignMessageCampaignRelationshipResponse';
import {  } from './getCampaignMessageCampaignRelationshipResponseData';
import {  } from './getCampaignMessageImageRelationshipResponse';
import {  } from './getCampaignMessageImageRelationshipResponseData';
import {  } from './getCampaignMessageResponseCollectionCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocument';
import {  } from './getCampaignMessageResponseCompoundDocumentData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import {  } from './getCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import { GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper } from './getCampaignMessageResponseCompoundDocumentIncludedInner';
import {  } from './getCampaignMessageTemplateRelationshipResponse';
import {  } from './getCampaignMessagesRelationshipsResponseCollection';
import {  } from './getCampaignMessagesRelationshipsResponseCollectionDataInner';
import {  } from './getCampaignRecipientEstimationJobResponse';
import {  } from './getCampaignRecipientEstimationResponse';
import {  } from './getCampaignResponse';
import {  } from './getCampaignResponseCollectionCompoundDocument';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInner';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages';
import {  } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner';
import { GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getCampaignResponseCompoundDocument';
import {  } from './getCampaignResponseData';
import {  } from './getCampaignResponseDataAllOfRelationships';
import {  } from './getCampaignSendJobResponse';
import {  } from './getCampaignTagsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import {  } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import {  } from './getCatalogCategoryCreateJobResponseCompoundDocument';
import {  } from './getCatalogCategoryDeleteJobResponse';
import {  } from './getCatalogCategoryDeleteJobResponseCollection';
import {  } from './getCatalogCategoryDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollection';
import {  } from './getCatalogCategoryItemsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogCategoryResponse';
import {  } from './getCatalogCategoryResponseCollection';
import {  } from './getCatalogCategoryResponseCollectionDataInner';
import {  } from './getCatalogCategoryResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories';
import {  } from './getCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner';
import {  } from './getCatalogCategoryUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollection';
import {  } from './getCatalogItemCategoriesRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import {  } from './getCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import {  } from './getCatalogItemCreateJobResponseCompoundDocument';
import {  } from './getCatalogItemDeleteJobResponse';
import {  } from './getCatalogItemDeleteJobResponseCollection';
import {  } from './getCatalogItemDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogItemResponseCollectionCompoundDocument';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogItemResponseCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems';
import {  } from './getCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner';
import {  } from './getCatalogItemUpdateJobResponseCompoundDocument';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollection';
import {  } from './getCatalogItemVariantsRelationshipsResponseCollectionDataInner';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogVariantCreateJobResponseCompoundDocument';
import {  } from './getCatalogVariantDeleteJobResponse';
import {  } from './getCatalogVariantDeleteJobResponseCollection';
import {  } from './getCatalogVariantDeleteJobResponseCollectionDataInner';
import {  } from './getCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogVariantResponse';
import {  } from './getCatalogVariantResponseCollection';
import {  } from './getCatalogVariantResponseCollectionDataInner';
import {  } from './getCatalogVariantResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocument';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants';
import {  } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner';
import {  } from './getCatalogVariantUpdateJobResponseCompoundDocument';
import {  } from './getConversationResponse';
import {  } from './getConversationResponseData';
import {  } from './getCouponCodeCouponRelationshipResponse';
import {  } from './getCouponCodeCouponRelationshipResponseData';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocument';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes';
import {  } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import {  } from './getCouponCodeCreateJobResponseCompoundDocument';
import {  } from './getCouponCodeResponseCollection';
import {  } from './getCouponCodeResponseCollectionCompoundDocument';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInner';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData';
import {  } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getCouponCodeResponseCollectionDataInner';
import {  } from './getCouponCodeResponseCollectionDataInnerAllOfRelationships';
import {  } from './getCouponCodeResponseCompoundDocument';
import {  } from './getCouponCodesRelationshipsResponseCollection';
import {  } from './getCouponCodesRelationshipsResponseCollectionDataInner';
import {  } from './getCouponResponse';
import {  } from './getCouponResponseCollection';
import {  } from './getCustomMetricMetricsRelationshipsResponseCollection';
import {  } from './getCustomMetricResponse';
import {  } from './getCustomMetricResponseCollectionCompoundDocument';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics';
import {  } from './getCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner';
import {  } from './getCustomMetricResponseCompoundDocument';
import {  } from './getCustomMetricResponseData';
import {  } from './getCustomMetricResponseDataAllOfRelationships';
import {  } from './getDataSourceResponse';
import {  } from './getDataSourceResponseCollection';
import {  } from './getEncodedFormResponse';
import {  } from './getEventMetricRelationshipResponse';
import {  } from './getEventProfileRelationshipResponse';
import {  } from './getEventProfileRelationshipResponseData';
import {  } from './getEventResponseCollectionCompoundDocument';
import {  } from './getEventResponseCollectionCompoundDocumentDataInner';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import { GetEventResponseCollectionCompoundDocumentIncludedInnerHelper } from './getEventResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getEventResponseCompoundDocument';
import {  } from './getFlowActionEncodedResponse';
import {  } from './getFlowActionEncodedResponseCollection';
import {  } from './getFlowActionEncodedResponseCollectionDataInner';
import {  } from './getFlowActionEncodedResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowActionEncodedResponseCompoundDocument';
import {  } from './getFlowActionEncodedResponseCompoundDocumentData';
import {  } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow';
import {  } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
import {  } from './getFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner';
import { GetFlowActionEncodedResponseCompoundDocumentIncludedInnerHelper } from './getFlowActionEncodedResponseCompoundDocumentIncludedInner';
import {  } from './getFlowActionFlowMessageRelationshipResponseCollection';
import {  } from './getFlowActionFlowRelationshipResponse';
import {  } from './getFlowFlowActionRelationshipListResponseCollection';
import {  } from './getFlowMessageActionRelationshipResponse';
import {  } from './getFlowMessageEncodedResponseCollection';
import {  } from './getFlowMessageEncodedResponseCollectionDataInner';
import {  } from './getFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowMessageEncodedResponseCompoundDocument';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentData';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate';
import {  } from './getFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData';
import { GetFlowMessageEncodedResponseCompoundDocumentIncludedInnerHelper } from './getFlowMessageEncodedResponseCompoundDocumentIncludedInner';
import {  } from './getFlowMessageTemplateRelationshipResponse';
import {  } from './getFlowMessageTemplateRelationshipResponseData';
import {  } from './getFlowResponse';
import {  } from './getFlowResponseCollection';
import {  } from './getFlowResponseCollectionCompoundDocument';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInner';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions';
import {  } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
import { GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper } from './getFlowResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getFlowResponseCollectionDataInner';
import {  } from './getFlowResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFlowTagsRelationshipsResponseCollection';
import {  } from './getFlowV2ResponseCompoundDocument';
import {  } from './getFlowV2ResponseCompoundDocumentData';
import {  } from './getFormResponse';
import {  } from './getFormResponseCollection';
import {  } from './getFormResponseCollectionDataInner';
import {  } from './getFormResponseCollectionDataInnerAllOfRelationships';
import {  } from './getFormVersionFormRelationshipResponse';
import {  } from './getFormVersionFormRelationshipResponseData';
import {  } from './getFormVersionResponse';
import {  } from './getFormVersionResponseCollection';
import {  } from './getFormVersionsRelationshipsResponseCollection';
import {  } from './getFormVersionsRelationshipsResponseCollectionDataInner';
import {  } from './getImageResponse';
import {  } from './getImageResponseCollection';
import {  } from './getImportErrorResponseCollection';
import {  } from './getListFlowTriggersRelationshipsResponseCollection';
import {  } from './getListListResponseCollectionCompoundDocument';
import {  } from './getListListResponseCollectionCompoundDocumentDataInner';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags';
import {  } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner';
import { GetListListResponseCollectionCompoundDocumentIncludedInnerHelper } from './getListListResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getListMemberResponseCollection';
import {  } from './getListMemberResponseCollectionDataInner';
import {  } from './getListProfilesRelationshipsResponseCollection';
import {  } from './getListResponseCollection';
import {  } from './getListResponseCollectionDataInner';
import {  } from './getListResponseCollectionDataInnerAllOfRelationships';
import {  } from './getListRetrieveResponseCompoundDocument';
import {  } from './getListRetrieveResponseCompoundDocumentData';
import {  } from './getListTagsRelationshipsResponseCollection';
import {  } from './getListTagsRelationshipsResponseCollectionDataInner';
import {  } from './getMappedMetricCustomMetricRelationshipResponse';
import {  } from './getMappedMetricCustomMetricRelationshipResponseData';
import {  } from './getMappedMetricMetricRelationshipResponse';
import {  } from './getMappedMetricResponseCollectionCompoundDocument';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import {  } from './getMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData';
import { GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper } from './getMappedMetricResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getMappedMetricResponseCompoundDocument';
import {  } from './getMetricFlowTriggersRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollection';
import {  } from './getMetricPropertiesRelationshipsResponseCollectionDataInner';
import {  } from './getMetricPropertyMetricRelationshipResponse';
import {  } from './getMetricPropertyResponseCollection';
import {  } from './getMetricPropertyResponseCollectionDataInner';
import {  } from './getMetricPropertyResponseCollectionDataInnerAllOfRelationships';
import {  } from './getMetricPropertyResponseCompoundDocument';
import {  } from './getMetricPropertyResponseCompoundDocumentData';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric';
import {  } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData';
import {  } from './getMetricResponse';
import {  } from './getMetricResponseCollection';
import {  } from './getMetricResponseCollectionCompoundDocument';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInner';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers';
import {  } from './getMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner';
import {  } from './getMetricResponseCompoundDocument';
import {  } from './getMetricResponseData';
import {  } from './getMetricResponseDataAllOfRelationships';
import {  } from './getProfileBulkImportJobListsRelationshipsResponseCollection';
import {  } from './getProfileBulkImportJobProfilesRelationshipsResponseCollection';
import {  } from './getProfileConversationRelationshipResponse';
import {  } from './getProfileConversationRelationshipResponseData';
import {  } from './getProfileImportJobResponseCollectionCompoundDocument';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInner';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists';
import {  } from './getProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner';
import {  } from './getProfileImportJobResponseCompoundDocument';
import {  } from './getProfileListsRelationshipsResponseCollection';
import {  } from './getProfileListsRelationshipsResponseCollectionDataInner';
import {  } from './getProfilePushTokensRelationshipsResponseCollection';
import {  } from './getProfilePushTokensRelationshipsResponseCollectionDataInner';
import {  } from './getProfileResponse';
import {  } from './getProfileResponseCollection';
import {  } from './getProfileResponseCollectionCompoundDocument';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInner';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens';
import {  } from './getProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner';
import { GetProfileResponseCollectionCompoundDocumentIncludedInnerHelper } from './getProfileResponseCollectionCompoundDocumentIncludedInner';
import {  } from './getProfileResponseCompoundDocument';
import {  } from './getProfileResponseCompoundDocumentData';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationships';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';
import {  } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner';
import { GetProfileResponseCompoundDocumentIncludedInnerHelper } from './getProfileResponseCompoundDocumentIncludedInner';
import {  } from './getProfileResponseData';
import {  } from './getProfileResponseDataAllOfRelationships';
import {  } from './getProfileSegmentsRelationshipsResponseCollection';
import {  } from './getPushTokenProfileRelationshipResponse';
import {  } from './getPushTokenResponseCollection';
import {  } from './getPushTokenResponseCollectionCompoundDocument';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInner';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';
import {  } from './getPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';
import {  } from './getPushTokenResponseCollectionDataInner';
import {  } from './getPushTokenResponseCollectionDataInnerAllOfRelationships';
import {  } from './getPushTokenResponseCompoundDocument';
import {  } from './getReviewResponseDTOCollectionCompoundDocument';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInner';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents';
import {  } from './getReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner';
import {  } from './getReviewResponseDTOCompoundDocument';
import {  } from './getSegmentFlowTriggersRelationshipsResponseCollection';
import {  } from './getSegmentListResponseCollectionCompoundDocument';
import {  } from './getSegmentListResponseCollectionCompoundDocumentDataInner';
import {  } from './getSegmentMemberResponseCollection';
import {  } from './getSegmentMemberResponseCollectionDataInner';
import {  } from './getSegmentProfilesRelationshipsResponseCollection';
import {  } from './getSegmentResponseCollection';
import {  } from './getSegmentResponseCollectionDataInner';
import {  } from './getSegmentRetrieveResponseCompoundDocument';
import {  } from './getSegmentRetrieveResponseCompoundDocumentData';
import {  } from './getSegmentTagsRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollection';
import {  } from './getTagCampaignRelationshipsResponseCollectionDataInner';
import {  } from './getTagFlowRelationshipsResponseCollection';
import {  } from './getTagFlowRelationshipsResponseCollectionDataInner';
import {  } from './getTagGroupRelationshipResponse';
import {  } from './getTagGroupRelationshipResponseData';
import {  } from './getTagGroupResponse';
import {  } from './getTagGroupResponseCollection';
import {  } from './getTagGroupResponseCollectionDataInner';
import {  } from './getTagGroupResponseCollectionDataInnerAllOfRelationships';
import {  } from './getTagGroupTagsRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollection';
import {  } from './getTagListRelationshipsResponseCollectionDataInner';
import {  } from './getTagResponseCollection';
import {  } from './getTagResponseCollectionCompoundDocument';
import {  } from './getTagResponseCollectionCompoundDocumentDataInner';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup';
import {  } from './getTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData';
import {  } from './getTagResponseCollectionDataInner';
import {  } from './getTagResponseCollectionDataInnerAllOfRelationships';
import {  } from './getTagResponseCompoundDocument';
import {  } from './getTagSegmentRelationshipsResponseCollection';
import {  } from './getTagSegmentRelationshipsResponseCollectionDataInner';
import {  } from './getTemplateDndResponse';
import {  } from './getTemplateDndResponseCollection';
import {  } from './getTemplateResponse';
import {  } from './getTrackingSettingResponse';
import {  } from './getTrackingSettingResponseCollection';
import {  } from './getUniversalContentResponse';
import {  } from './getUniversalContentResponseCollection';
import {  } from './getWebFeedResponse';
import {  } from './getWebFeedResponseCollection';
import {  } from './getWebhookResponseCollectionCompoundDocument';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInner';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics';
import {  } from './getWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner';
import {  } from './getWebhookResponseCompoundDocument';
import {  } from './getWebhookTopicResponse';
import {  } from './getWebhookTopicResponseCollection';
import {  } from './goToInbox';
import {  } from './greaterThanPositiveNumericFilter';
import {  } from './hTMLBlockDataV0';
import {  } from './hTMLBlockDataV1';
import {  } from './hTMLBlockV0';
import {  } from './hTMLBlockV1';
import {  } from './hTMLText';
import {  } from './hTMLTextProperties';
import {  } from './hTMLTextStyles';
import {  } from './hasEmailMarketing';
import {  } from './hasEmailMarketingConsent';
import {  } from './hasEmailMarketingConsentConsentStatus';
import {  } from './hasEmailMarketingNeverSubscribed';
import {  } from './hasEmailMarketingSubscribed';
import {  } from './hasEmailMarketingSubscribedFiltersInner';
import {  } from './hasPushMarketing';
import {  } from './hasPushMarketingConsent';
import {  } from './hasSMSMarketingConsent';
import {  } from './hasSMSMarketingSubscribed';
import {  } from './hasSMSMarketingSubscribedFiltersInner';
import {  } from './headerBlockData';
import {  } from './headerBlockStyles';
import {  } from './headerBlockV0';
import {  } from './headerBlockV1';
import {  } from './headerBlockV1SubblocksInner';
import {  } from './headerImageSubBlock';
import {  } from './headerLinkSubBlock';
import {  } from './headerLogoSubBlock';
import {  } from './heading1Style';
import {  } from './heading2Style';
import {  } from './heading3Style';
import {  } from './heading4Style';
import {  } from './headingStyleStyles';
import {  } from './horizontalRuleBlockData';
import {  } from './horizontalRuleBlockStyles';
import {  } from './horizontalRuleBlockV0';
import {  } from './horizontalRuleBlockV1';
import {  } from './identifiedProfiles';
import {  } from './image';
import {  } from './imageAction';
import {  } from './imageAssetProperties';
import {  } from './imageBlockCroppingProperties';
import {  } from './imageBlockData';
import {  } from './imageBlockDataProperties';
import {  } from './imageBlockStyles';
import {  } from './imageBlockV0';
import {  } from './imageBlockV1';
import {  } from './imageCreateQuery';
import {  } from './imageCreateQueryResourceObject';
import {  } from './imageCreateQueryResourceObjectAttributes';
import {  } from './imageDropShadowStyles';
import {  } from './imageEnum';
import {  } from './imagePartialUpdateQuery';
import {  } from './imagePartialUpdateQueryResourceObject';
import {  } from './imagePartialUpdateQueryResourceObjectAttributes';
import {  } from './imageProperties';
import {  } from './imageResponseObjectResource';
import {  } from './imageResponseObjectResourceAttributes';
import {  } from './imageStyles';
import {  } from './immediateSendStrategy';
import {  } from './implicitlyOrExplicitlyReachable';
import {  } from './implicitlyOrExplicitlyUnreachable';
import {  } from './implicitlyReachable';
import {  } from './implicitlyUnreachable';
import {  } from './importErrorEnum';
import {  } from './importErrorResponseObjectResource';
import {  } from './importErrorResponseObjectResourceAttributes';
import {  } from './inStringArrayFilter';
import {  } from './inTheLastBaseRelativeDateFilter';
import {  } from './inboundMessageMethodFilter';
import {  } from './increment';
import {  } from './inputStyles';
import {  } from './integerFilter';
import {  } from './internalScheduledReportBuilderReportData';
import {  } from './internalScheduledReportData';
import {  } from './internalServiceAction';
import {  } from './internalServiceActionData';
import {  } from './internalServiceActionDataServiceConfiguration';
import {  } from './internalTrackEventData';
import {  } from './internalUnknownServiceData';
import {  } from './invalidEmailDateFilter';
import {  } from './isSetExistenceFilter';
import {  } from './lessThanPositiveNumericFilter';
import {  } from './link';
import {  } from './linkStyle';
import {  } from './linkStyleStyles';
import {  } from './linkStyles';
import {  } from './listContainsOperatorListContainsFilter';
import {  } from './listCreateQuery';
import {  } from './listCreateQueryResourceObject';
import {  } from './listCreateQueryResourceObjectAttributes';
import {  } from './listEnum';
import {  } from './listLengthFilter';
import {  } from './listListResponseObjectResource';
import {  } from './listListResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceAttributes';
import {  } from './listMemberResponseObjectResourceExtended';
import {  } from './listMemberResponseObjectResourceExtendedAttributes';
import {  } from './listMembersAddQuery';
import {  } from './listMembersDeleteQuery';
import {  } from './listPartialUpdateQuery';
import {  } from './listPartialUpdateQueryResourceObject';
import {  } from './listPartialUpdateQueryResourceObjectAttributes';
import {  } from './listRegexOperatorListContainsFilter';
import {  } from './listResponseObjectResource';
import {  } from './listRetrieveResponseObjectResourceAttributes';
import {  } from './listRetrieveResponseObjectResourceExtended';
import {  } from './listRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './listSetFilter';
import {  } from './listSubstringFilter';
import {  } from './listTrigger';
import {  } from './listUpdateAction';
import {  } from './listUpdateActionData';
import {  } from './listsAndSegments';
import {  } from './listsAndSegmentsProperties';
import {  } from './localStaticSend';
import {  } from './location';
import {  } from './locationProperties';
import {  } from './lowInventoryCondition';
import {  } from './lowInventoryConditionConditionGroup';
import {  } from './lowInventoryConditionFilter';
import {  } from './lowInventoryConditionFilter2';
import {  } from './lowInventoryTrigger';
import {  } from './mailboxProviderMethodFilter';
import {  } from './manualAddManualMethodFilter';
import {  } from './manualImportManualMethodFilter';
import {  } from './manualImportMethodFilter';
import {  } from './manualRemoveMethodFilter';
import {  } from './manualSuppressionDateFilter';
import {  } from './mappedMetricEnum';
import {  } from './mappedMetricPartialUpdateQuery';
import {  } from './mappedMetricPartialUpdateQueryResourceObject';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationships';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric';
import {  } from './mappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData';
import {  } from './mappedMetricResponseObjectResource';
import {  } from './mappedMetricResponseObjectResourceAttributes';
import {  } from './margin';
import {  } from './messageBlockedMethodFilter';
import {  } from './methodFilter';
import {  } from './metricAggregateEnum';
import {  } from './metricAggregateQuery';
import {  } from './metricAggregateQueryResourceObject';
import {  } from './metricAggregateQueryResourceObjectAttributes';
import {  } from './metricAggregateRowDTO';
import {  } from './metricCreateQueryResourceObject';
import {  } from './metricCreateQueryResourceObjectAttributes';
import {  } from './metricEnum';
import {  } from './metricPropertyCondition';
import {  } from './metricPropertyConditionConditionGroup';
import {  } from './metricPropertyConditionFilter';
import {  } from './metricPropertyConditionFilter2';
import {  } from './metricPropertyEnum';
import {  } from './metricPropertyResponseObjectResourceAttributes';
import {  } from './metricPropertyResponseObjectResourceExtended';
import {  } from './metricPropertyResponseObjectResourceExtendedAttributes';
import {  } from './metricResponseObjectResource';
import {  } from './metricResponseObjectResourceAttributes';
import {  } from './metricTrigger';
import {  } from './mobileOverlay';
import {  } from './mobilePushBadge';
import {  } from './mobilePushBadgeBadgeOptions';
import {  } from './mobilePushContent';
import {  } from './mobilePushContentCreate';
import {  } from './mobilePushContentUpdate';
import {  } from './mobilePushMessageSilentDefinition';
import {  } from './mobilePushMessageSilentDefinitionCreate';
import {  } from './mobilePushMessageSilentDefinitionUpdate';
import {  } from './mobilePushMessageStandardDefinition';
import {  } from './mobilePushMessageStandardDefinitionCreate';
import {  } from './mobilePushMessageStandardDefinitionUpdate';
import {  } from './mobilePushNoBadge';
import {  } from './mobilePushOptions';
import {  } from './mobilePushOptionsBadge';
import {  } from './mobilePushOptionsOnOpen';
import {  } from './mobileStyle';
import {  } from './mobileStyleProperties';
import {  } from './mobileStyleStyles';
import {  } from './modelDate';
import {  } from './multiBranchSplitAction';
import {  } from './multiBranchSplitActionData';
import {  } from './multiBranchSplitBranch';
import {  } from './multiBranchSplitBranchBranchFilter';
import {  } from './multiBranchSplitBranchBranchFilterConditionGroupsInner';
import {  } from './multiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner';
import {  } from './nextStep';
import {  } from './nextStepProperties';
import {  } from './noEmailMarketing';
import {  } from './noEmailMarketingConsent';
import {  } from './noEmailMarketingConsentConsentStatus';
import {  } from './noEmailMarketingFiltersInner';
import {  } from './noEmailMarketingNeverSubscribed';
import {  } from './noEmailMarketingSubscribed';
import {  } from './noEmailMarketingUnsubscribed';
import {  } from './noEmailMarketingUnsubscribedFiltersInner';
import {  } from './noPushMarketing';
import {  } from './noPushMarketingConsent';
import {  } from './noSMSMarketing';
import {  } from './noSMSMarketingConsent';
import {  } from './noSMSMarketingConsentConsentStatus';
import {  } from './noSMSMarketingNeverSubscribed';
import {  } from './noSMSMarketingUnsubscribed';
import {  } from './noSMSMarketingUnsubscribedFiltersInner';
import {  } from './nonLocalStaticSend';
import {  } from './numericOperatorNumericFilter';
import {  } from './numericRangeFilter';
import {  } from './objectLinks';
import {  } from './oneClickUnsubscribeMethodFilter';
import {  } from './onlyRelatedLinks';
import {  } from './onsiteProfileCreateQueryResourceObject';
import {  } from './onsiteProfileCreateQueryResourceObjectAttributes';
import {  } from './onsiteProfileMeta';
import {  } from './openForm';
import {  } from './openFormProperties';
import {  } from './optInCode';
import {  } from './optInCodeProperties';
import {  } from './optInCodeStyles';
import {  } from './padding';
import {  } from './pageVisits';
import {  } from './pageVisitsProperties';
import {  } from './patchCampaignMessageResponse';
import {  } from './patchCampaignMessageResponseData';
import {  } from './patchCampaignResponse';
import {  } from './patchCatalogCategoryResponse';
import {  } from './patchCatalogItemResponse';
import {  } from './patchCatalogVariantResponse';
import {  } from './patchCouponCodeResponse';
import {  } from './patchCouponResponse';
import {  } from './patchCustomMetricResponse';
import {  } from './patchFlowActionEncodedResponse';
import {  } from './patchFlowActionEncodedResponseData';
import {  } from './patchFlowResponse';
import {  } from './patchFlowResponseData';
import {  } from './patchImageResponse';
import {  } from './patchListPartialUpdateResponse';
import {  } from './patchMappedMetricResponse';
import {  } from './patchMappedMetricResponseData';
import {  } from './patchProfileResponse';
import {  } from './patchReviewResponseDTO';
import {  } from './patchReviewResponseDTOData';
import {  } from './patchReviewResponseDTODataRelationships';
import {  } from './patchReviewResponseDTODataRelationshipsItem';
import {  } from './patchReviewResponseDTODataRelationshipsItemData';
import {  } from './patchSegmentPartialUpdateResponse';
import {  } from './patchTagGroupResponse';
import {  } from './patchTemplateDndResponse';
import {  } from './patchTrackingSettingResponse';
import {  } from './patchTrackingSettingResponseData';
import {  } from './patchUniversalContentResponse';
import {  } from './patchWebFeedResponse';
import {  } from './patchWebhookResponse';
import {  } from './phoneNumber';
import {  } from './phoneNumberConsentChannelSettings';
import {  } from './phoneNumberProperties';
import {  } from './phoneNumberStyles';
import {  } from './postBulkProfileSuppressionsCreateJobResponse';
import {  } from './postBulkProfileSuppressionsCreateJobResponseData';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationships';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments';
import {  } from './postBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner';
import {  } from './postBulkProfileSuppressionsRemoveJobResponse';
import {  } from './postBulkProfileSuppressionsRemoveJobResponseData';
import {  } from './postCampaignMessageResponse';
import {  } from './postCampaignMessageResponseData';
import {  } from './postCampaignMessageResponseDataAttributes';
import {  } from './postCampaignMessageResponseDataAttributesContent';
import {  } from './postCampaignMessageResponseDataRelationships';
import {  } from './postCampaignRecipientEstimationJobResponse';
import {  } from './postCampaignRecipientEstimationJobResponseData';
import {  } from './postCampaignResponse';
import {  } from './postCampaignResponseData';
import {  } from './postCampaignSendJobResponse';
import {  } from './postCampaignSendJobResponseData';
import {  } from './postCampaignValuesResponseDTO';
import {  } from './postCampaignValuesResponseDTOData';
import {  } from './postCampaignValuesResponseDTODataAttributes';
import {  } from './postCampaignValuesResponseDTODataRelationships';
import {  } from './postCatalogCategoryCreateJobResponse';
import {  } from './postCatalogCategoryCreateJobResponseData';
import {  } from './postCatalogCategoryDeleteJobResponse';
import {  } from './postCatalogCategoryDeleteJobResponseData';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationships';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategories';
import {  } from './postCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner';
import {  } from './postCatalogCategoryResponse';
import {  } from './postCatalogCategoryResponseData';
import {  } from './postCatalogCategoryResponseDataRelationships';
import {  } from './postCatalogCategoryResponseDataRelationshipsItems';
import {  } from './postCatalogCategoryUpdateJobResponse';
import {  } from './postCatalogCategoryUpdateJobResponseData';
import {  } from './postCatalogItemCreateJobResponse';
import {  } from './postCatalogItemCreateJobResponseData';
import {  } from './postCatalogItemDeleteJobResponse';
import {  } from './postCatalogItemDeleteJobResponseData';
import {  } from './postCatalogItemDeleteJobResponseDataRelationships';
import {  } from './postCatalogItemDeleteJobResponseDataRelationshipsItems';
import {  } from './postCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner';
import {  } from './postCatalogItemResponse';
import {  } from './postCatalogItemResponseData';
import {  } from './postCatalogItemUpdateJobResponse';
import {  } from './postCatalogItemUpdateJobResponseData';
import {  } from './postCatalogVariantCreateJobResponse';
import {  } from './postCatalogVariantCreateJobResponseData';
import {  } from './postCatalogVariantDeleteJobResponse';
import {  } from './postCatalogVariantDeleteJobResponseData';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationships';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariants';
import {  } from './postCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner';
import {  } from './postCatalogVariantResponse';
import {  } from './postCatalogVariantResponseData';
import {  } from './postCatalogVariantResponseDataRelationships';
import {  } from './postCatalogVariantResponseDataRelationshipsItem';
import {  } from './postCatalogVariantResponseDataRelationshipsItemData';
import {  } from './postCatalogVariantUpdateJobResponse';
import {  } from './postCatalogVariantUpdateJobResponseData';
import {  } from './postCouponCodeCreateJobResponse';
import {  } from './postCouponCodeCreateJobResponseData';
import {  } from './postCouponCodeResponse';
import {  } from './postCouponCodeResponseData';
import {  } from './postCouponCodeResponseDataRelationships';
import {  } from './postCouponCodeResponseDataRelationshipsProfile';
import {  } from './postCouponCodeResponseDataRelationshipsProfileData';
import {  } from './postCouponResponse';
import {  } from './postCouponResponseData';
import {  } from './postCustomMetricResponse';
import {  } from './postCustomMetricResponseData';
import {  } from './postDataSourceResponse';
import {  } from './postDataSourceResponseData';
import {  } from './postEncodedFormResponse';
import {  } from './postEncodedFormResponseData';
import {  } from './postFlowSeriesResponseDTO';
import {  } from './postFlowSeriesResponseDTOData';
import {  } from './postFlowSeriesResponseDTODataAttributes';
import {  } from './postFlowV2Response';
import {  } from './postFlowV2ResponseData';
import {  } from './postFlowV2ResponseDataAttributes';
import {  } from './postFlowValuesResponseDTO';
import {  } from './postFlowValuesResponseDTOData';
import {  } from './postFlowValuesResponseDTODataAttributes';
import {  } from './postFlowValuesResponseDTODataRelationships';
import {  } from './postFormSeriesResponseDTO';
import {  } from './postFormSeriesResponseDTOData';
import {  } from './postFormSeriesResponseDTODataAttributes';
import {  } from './postFormValuesResponseDTO';
import {  } from './postFormValuesResponseDTOData';
import {  } from './postFormValuesResponseDTODataAttributes';
import {  } from './postImageResponse';
import {  } from './postImageResponseData';
import {  } from './postListCreateResponse';
import {  } from './postListCreateResponseData';
import {  } from './postListCreateResponseDataRelationships';
import {  } from './postListCreateResponseDataRelationshipsProfiles';
import {  } from './postListCreateResponseDataRelationshipsProfilesDataInner';
import {  } from './postMetricAggregateResponse';
import {  } from './postMetricAggregateResponseData';
import {  } from './postMetricAggregateResponseDataAttributes';
import {  } from './postProfileImportJobResponse';
import {  } from './postProfileImportJobResponseData';
import {  } from './postProfileImportJobResponseDataRelationships';
import {  } from './postProfileImportJobResponseDataRelationshipsImportErrors';
import {  } from './postProfileImportJobResponseDataRelationshipsImportErrorsDataInner';
import {  } from './postProfileImportJobResponseDataRelationshipsProfiles';
import {  } from './postProfileImportJobResponseDataRelationshipsProfilesDataInner';
import {  } from './postProfileMergeResponse';
import {  } from './postProfileMergeResponseData';
import {  } from './postProfileResponse';
import {  } from './postProfileResponseData';
import {  } from './postProfileResponseDataAttributes';
import {  } from './postSegmentCreateResponse';
import {  } from './postSegmentCreateResponseData';
import {  } from './postSegmentSeriesResponseDTO';
import {  } from './postSegmentSeriesResponseDTOData';
import {  } from './postSegmentSeriesResponseDTODataAttributes';
import {  } from './postSegmentValuesResponseDTO';
import {  } from './postSegmentValuesResponseDTOData';
import {  } from './postSegmentValuesResponseDTODataAttributes';
import {  } from './postTagGroupResponse';
import {  } from './postTagGroupResponseData';
import {  } from './postTagGroupResponseDataRelationships';
import {  } from './postTagResponse';
import {  } from './postTagResponseData';
import {  } from './postTagResponseDataRelationships';
import {  } from './postTagResponseDataRelationshipsCampaigns';
import {  } from './postTagResponseDataRelationshipsCampaignsDataInner';
import {  } from './postTemplateDndResponse';
import {  } from './postTemplateDndResponseData';
import {  } from './postTemplateDndResponseDataAttributes';
import {  } from './postTemplateResponse';
import {  } from './postTemplateResponseData';
import {  } from './postUniversalContentResponse';
import {  } from './postUniversalContentResponseData';
import {  } from './postWebFeedResponse';
import {  } from './postWebFeedResponseData';
import {  } from './postWebhookResponse';
import {  } from './postWebhookResponseData';
import {  } from './predictiveAnalytics';
import {  } from './preferencePageFilter';
import {  } from './preferencePageMethodFilter';
import {  } from './previouslySubmitted';
import {  } from './priceDropCondition';
import {  } from './priceDropConditionConditionGroup';
import {  } from './priceDropConditionFilter';
import {  } from './priceDropConditionFilter2';
import {  } from './priceDropTrigger';
import {  } from './productBlockData';
import {  } from './productBlockDataProperties';
import {  } from './productBlockStyles';
import {  } from './productBlockV0';
import {  } from './productBlockV1';
import {  } from './productSubBlock';
import {  } from './profileBulkImportJobEnum';
import {  } from './profileCreateQuery';
import {  } from './profileCreateQueryResourceObject';
import {  } from './profileCreateQueryResourceObjectAttributes';
import {  } from './profileEnum';
import {  } from './profileEventTracked';
import {  } from './profileEventTrackedProperties';
import {  } from './profileHasCustomObjectCondition';
import {  } from './profileHasCustomObjectFilter';
import {  } from './profileHasCustomObjectFilterFilter';
import {  } from './profileHasGroupMembershipCondition';
import {  } from './profileHasGroupMembershipConditionTimeframeFilter';
import {  } from './profileHasNotReceivedEmailMessageCondition';
import {  } from './profileHasNotReceivedPushMessageCondition';
import {  } from './profileHasNotReceivedPushMessageConditionTimeframeFilter';
import {  } from './profileHasNotReceivedSmsMessageCondition';
import {  } from './profileIdentifierDTOResourceObject';
import {  } from './profileIdentifierDTOResourceObjectAttributes';
import {  } from './profileImportJobCreateQuery';
import {  } from './profileImportJobCreateQueryResourceObject';
import {  } from './profileImportJobCreateQueryResourceObjectAttributes';
import {  } from './profileImportJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './profileImportJobCreateQueryResourceObjectRelationships';
import {  } from './profileImportJobCreateQueryResourceObjectRelationshipsLists';
import {  } from './profileImportJobCreateQueryResourceObjectRelationshipsListsDataInner';
import {  } from './profileImportJobResponseObjectResource';
import {  } from './profileImportJobResponseObjectResourceAttributes';
import {  } from './profileLocation';
import {  } from './profileMarketingConsentCondition';
import {  } from './profileMarketingConsentConditionConsent';
import {  } from './profileMergeEnum';
import {  } from './profileMergeQuery';
import {  } from './profileMergeQueryResourceObject';
import {  } from './profileMergeQueryResourceObjectRelationships';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfiles';
import {  } from './profileMergeQueryResourceObjectRelationshipsProfilesDataInner';
import {  } from './profileMeta';
import {  } from './profileMetaPatchProperties';
import {  } from './profileMetricFunnelSteps';
import {  } from './profileMetricPropertyFilter';
import {  } from './profileMetricPropertyFilterFilter';
import {  } from './profileModificationMethodFilter';
import {  } from './profileNoGroupMembershipCondition';
import {  } from './profileNotInFlowCondition';
import {  } from './profileOperationDelete';
import {  } from './profileOperationUpdateOrCreateBoolean';
import {  } from './profileOperationUpdateOrCreateDate';
import {  } from './profileOperationUpdateOrCreateList';
import {  } from './profileOperationUpdateOrCreateNumeric';
import {  } from './profileOperationUpdateOrCreateString';
import {  } from './profilePartialUpdateQuery';
import {  } from './profilePartialUpdateQueryResourceObject';
import {  } from './profilePermissionsCondition';
import {  } from './profilePermissionsConditionPermission';
import {  } from './profilePostalCodeDistanceCondition';
import {  } from './profilePostalCodeDistanceConditionFilter';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityPriorityFilter';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankCondition';
import {  } from './profilePredictiveAnalyticsChannelAffinityRankFilter';
import {  } from './profilePredictiveAnalyticsDateCondition';
import {  } from './profilePredictiveAnalyticsNumericCondition';
import {  } from './profilePredictiveAnalyticsStringCondition';
import {  } from './profilePredictiveAnalyticsStringFilter';
import {  } from './profilePropertyCondition';
import {  } from './profilePropertyConditionFilter';
import {  } from './profilePropertyDateTrigger';
import {  } from './profileRandomSampleCondition';
import {  } from './profileRegionCondition';
import {  } from './profileResponseObjectResource';
import {  } from './profileResponseObjectResourceAttributes';
import {  } from './profileResponseObjectResourceExtended';
import {  } from './profileResponseObjectResourceExtendedAttributes';
import {  } from './profileSubscriptionBulkCreateJobEnum';
import {  } from './profileSubscriptionBulkDeleteJobEnum';
import {  } from './profileSubscriptionCreateQueryResourceObject';
import {  } from './profileSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './profileSubscriptionDeleteQueryResourceObject';
import {  } from './profileSubscriptionDeleteQueryResourceObjectAttributes';
import {  } from './profileSuppressionBulkCreateJobEnum';
import {  } from './profileSuppressionBulkDeleteJobEnum';
import {  } from './profileSuppressionCreateQueryResourceObject';
import {  } from './profileSuppressionCreateQueryResourceObjectAttributes';
import {  } from './profileSuppressionDeleteQueryResourceObject';
import {  } from './profileSuppressionDeleteQueryResourceObjectAttributes';
import {  } from './profileUpsertQuery';
import {  } from './profileUpsertQueryResourceObject';
import {  } from './profileUpsertQueryResourceObjectAttributes';
import {  } from './promotionalSMSSubscription';
import {  } from './property';
import {  } from './propertyOption';
import {  } from './providedLandlineMethodFilter';
import {  } from './providedNoAgeMethodFilter';
import {  } from './pushActionButton';
import {  } from './pushChannel';
import {  } from './pushMarketing';
import {  } from './pushOnOpenApp';
import {  } from './pushOnOpenDeepLink';
import {  } from './pushProfileUpsertQueryResourceObject';
import {  } from './pushProfileUpsertQueryResourceObjectAttributes';
import {  } from './pushSendOptions';
import {  } from './pushSubscriptionParameters';
import {  } from './pushTokenCreateQuery';
import {  } from './pushTokenCreateQueryResourceObject';
import {  } from './pushTokenCreateQueryResourceObjectAttributes';
import {  } from './pushTokenCreateQueryResourceObjectAttributesProfile';
import {  } from './pushTokenDeviceMetadata';
import {  } from './pushTokenEntry';
import {  } from './pushTokenEnum';
import {  } from './pushTokenResponseObjectResource';
import {  } from './pushTokenResponseObjectResourceAttributes';
import {  } from './pushUnsubscriptionParameters';
import {  } from './quoteStyle';
import {  } from './radioButtons';
import {  } from './radioButtonsProperties';
import {  } from './radioButtonsStyles';
import {  } from './ratingStyle';
import {  } from './recordedDateFilter';
import {  } from './redirect';
import {  } from './redirectProperties';
import {  } from './reentryCriteria';
import {  } from './rejectReasonFake';
import {  } from './rejectReasonMisleading';
import {  } from './rejectReasonOther';
import {  } from './rejectReasonPrivateInformation';
import {  } from './rejectReasonProfanity';
import {  } from './rejectReasonUnrelated';
import {  } from './relationshipLinks';
import {  } from './relativeAnniversaryDateFilter';
import {  } from './relativeDateOperatorBaseRelativeDateFilter';
import {  } from './relativeDateRangeFilter';
import {  } from './renderOptions';
import {  } from './renderOptionsSubObject';
import {  } from './resendOptInCode';
import {  } from './review';
import {  } from './reviewBlockData';
import {  } from './reviewBlockDataProperties';
import {  } from './reviewBlockStyles';
import {  } from './reviewBlockV0';
import {  } from './reviewBlockV1';
import {  } from './reviewEnum';
import {  } from './reviewPatchQuery';
import {  } from './reviewPatchQueryResourceObject';
import {  } from './reviewPatchQueryResourceObjectAttributes';
import {  } from './reviewPatchQueryResourceObjectAttributesStatus';
import {  } from './reviewProductDTO';
import {  } from './reviewProperties';
import {  } from './reviewPublicReply';
import {  } from './reviewResponseDTOObjectResource';
import {  } from './reviewResponseDTOObjectResourceAttributes';
import {  } from './reviewResponseDTOObjectResourceAttributesStatus';
import {  } from './reviewStatusFeatured';
import {  } from './reviewStatusPending';
import {  } from './reviewStatusPublished';
import {  } from './reviewStatusRejected';
import {  } from './reviewStatusRejectedRejectionReason';
import {  } from './reviewStatusUnpublished';
import {  } from './reviewStyles';
import {  } from './reviewerNameStyle';
import {  } from './richTextMargin';
import {  } from './richTextStyle';
import {  } from './richTextStyles';
import {  } from './rowData';
import {  } from './rowStyles';
import {  } from './rowV0';
import {  } from './rowV0BlocksInner';
import {  } from './rowV1';
import {  } from './sMSChannel';
import {  } from './sMSConsentCheckbox';
import {  } from './sMSConsentCheckboxProperties';
import {  } from './sMSConsentCheckboxStyles';
import {  } from './sMSContent';
import {  } from './sMSContentCreate';
import {  } from './sMSContentSubObject';
import {  } from './sMSDisclosure';
import {  } from './sMSDisclosureAccountDefault';
import {  } from './sMSDisclosureCustom';
import {  } from './sMSDisclosureProperties';
import {  } from './sMSDisclosurePropertiesContent';
import {  } from './sMSDisclosureStyles';
import {  } from './sMSDisclosureTextStyle';
import {  } from './sMSMarketing';
import {  } from './sMSMessageDefinition';
import {  } from './sMSMessageDefinitionCreate';
import {  } from './sMSSendOptions';
import {  } from './sMSSubscriptionParameters';
import {  } from './sMSTransactional';
import {  } from './sMSUnsubscriptionParameters';
import {  } from './scroll';
import {  } from './scrollProperties';
import {  } from './sectionData';
import {  } from './sectionProperties';
import {  } from './sectionStyles';
import {  } from './sectionV0';
import {  } from './sectionV1';
import {  } from './segmentCreateQuery';
import {  } from './segmentCreateQueryResourceObject';
import {  } from './segmentCreateQueryResourceObjectAttributes';
import {  } from './segmentDefinition';
import {  } from './segmentEnum';
import {  } from './segmentListResponseObjectResource';
import {  } from './segmentListResponseObjectResourceAttributes';
import {  } from './segmentMemberResponseObjectResourceAttributes';
import {  } from './segmentMemberResponseObjectResourceExtended';
import {  } from './segmentMemberResponseObjectResourceExtendedAttributes';
import {  } from './segmentPartialUpdateQuery';
import {  } from './segmentPartialUpdateQueryResourceObject';
import {  } from './segmentPartialUpdateQueryResourceObjectAttributes';
import {  } from './segmentResponseObjectResource';
import {  } from './segmentRetrieveResponseObjectResourceAttributes';
import {  } from './segmentRetrieveResponseObjectResourceExtended';
import {  } from './segmentRetrieveResponseObjectResourceExtendedAttributes';
import {  } from './segmentSeriesReportEnum';
import {  } from './segmentSeriesRequestDTO';
import {  } from './segmentSeriesRequestDTOResourceObject';
import {  } from './segmentSeriesRequestDTOResourceObjectAttributes';
import {  } from './segmentTrigger';
import {  } from './segmentValuesReportEnum';
import {  } from './segmentValuesRequestDTO';
import {  } from './segmentValuesRequestDTOResourceObject';
import {  } from './segmentValuesRequestDTOResourceObjectAttributes';
import {  } from './segmentValuesRequestDTOResourceObjectAttributesTimeframe';
import {  } from './segmentsProfileMetricCondition';
import {  } from './segmentsProfileMetricConditionTimeframeFilter';
import {  } from './segmentsProfileMetricFunnelCondition';
import {  } from './segmentsProfileMetricFunnelConditionTimeframeFilter';
import {  } from './sendEmailAction';
import {  } from './sendEmailActionData';
import {  } from './sendInternalAlertAction';
import {  } from './sendInternalAlertActionData';
import {  } from './sendPushNotificationAction';
import {  } from './sendPushNotificationActionContentExperimentActionData';
import {  } from './sendPushNotificationActionCurrentExperiment';
import {  } from './sendPushNotificationActionData';
import {  } from './sendSmsAction';
import {  } from './sendSmsActionData';
import {  } from './sendTime';
import {  } from './sendTimeSubObject';
import {  } from './sendWebhookAction';
import {  } from './sendWebhookActionData';
import {  } from './sendWhatsAppAction';
import {  } from './sendWhatsAppActionData';
import {  } from './seriesData';
import {  } from './serverBISSubscriptionCreateQuery';
import {  } from './serverBISSubscriptionCreateQueryResourceObject';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributes';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectAttributesProfile';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationships';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariant';
import {  } from './serverBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData';
import {  } from './sftpMethodFilter';
import {  } from './shopifyIntegrationFilter';
import {  } from './shopifyIntegrationMethodFilter';
import {  } from './sideImageSettings';
import {  } from './signupCounter';
import {  } from './signupCounterProperties';
import {  } from './signupCounterStyles';
import {  } from './sinceFlowStartDateFilter';
import {  } from './skipToSuccess';
import {  } from './smartSendTimeStrategy';
import {  } from './socialBlockData';
import {  } from './socialBlockProperties';
import {  } from './socialBlockStyles';
import {  } from './socialBlockV0';
import {  } from './socialBlockV1';
import {  } from './socialBlockV1SubblocksInner';
import {  } from './socialIconSubBlock';
import {  } from './socialSpacerSubBlock';
import {  } from './spacerBlockData';
import {  } from './spacerBlockStyles';
import {  } from './spacerBlockV0';
import {  } from './spacerBlockV1';
import {  } from './spamComplaintMethodFilter';
import {  } from './spinToWin';
import {  } from './spinToWinProperties';
import {  } from './spinToWinSliceConfig';
import {  } from './spinToWinSliceStyle';
import {  } from './spinToWinStyles';
import {  } from './splitBlockData';
import {  } from './splitBlockStyles';
import {  } from './splitBlockV0';
import {  } from './splitBlockV1';
import {  } from './splitBlockV1SubblocksInner';
import {  } from './staticCount';
import {  } from './staticCouponConfig';
import {  } from './staticDateFilter';
import {  } from './staticDateRangeFilter';
import {  } from './staticImageBlockProperties';
import {  } from './staticProductBlockProperties';
import {  } from './staticReviewBlockProperties';
import {  } from './staticSendStrategy';
import {  } from './staticSendStrategyOptions';
import {  } from './staticTableBlockProperties';
import {  } from './staticTrackingParam';
import {  } from './statusDateFilter';
import {  } from './statusDateFilterFilter';
import {  } from './step';
import {  } from './streetAddress';
import {  } from './stringArrayOperatorStringArrayFilter';
import {  } from './stringInArrayFilter';
import {  } from './stringOperatorStringFilter';
import {  } from './stringPhoneOperatorStringArrayFilter';
import {  } from './submitBackInStock';
import {  } from './submitBackInStockProperties';
import {  } from './submitOptInCode';
import {  } from './subscribeViaSMS';
import {  } from './subscribeViaSMSProperties';
import {  } from './subscribeViaWhatsApp';
import {  } from './subscribeViaWhatsAppProperties';
import {  } from './subscribedSMSIsRcsCapableFilter';
import {  } from './subscriptionChannels';
import {  } from './subscriptionCreateJobCreateQuery';
import {  } from './subscriptionCreateJobCreateQueryResourceObject';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectAttributes';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationships';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsList';
import {  } from './subscriptionCreateJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './subscriptionDeleteJobCreateQuery';
import {  } from './subscriptionDeleteJobCreateQueryResourceObject';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationships';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
import {  } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './subscriptionParameters';
import {  } from './subscriptions';
import {  } from './suppressionCreateJobCreateQuery';
import {  } from './suppressionCreateJobCreateQueryResourceObject';
import {  } from './suppressionCreateJobCreateQueryResourceObjectAttributes';
import {  } from './suppressionCreateJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationships';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsList';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegment';
import {  } from './suppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData';
import {  } from './suppressionDeleteJobCreateQuery';
import {  } from './suppressionDeleteJobCreateQueryResourceObject';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectAttributes';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectAttributesProfiles';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationships';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsList';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsListData';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment';
import {  } from './suppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData';
import {  } from './tableBlockData';
import {  } from './tableBlockDataProperties';
import {  } from './tableBlockStyles';
import {  } from './tableBlockV0';
import {  } from './tableBlockV1';
import {  } from './tableBlockV1SubblocksInner';
import {  } from './tableFallbackHtmlSubBlock';
import {  } from './tableFallbackImageSubBlock';
import {  } from './tableFallbackTextSubBlock';
import {  } from './tableHeaderSubBlock';
import {  } from './tableHtmlSubBlock';
import {  } from './tableImageSubBlock';
import {  } from './tableTextSubBlock';
import {  } from './tagCampaignOp';
import {  } from './tagCampaignOpDataInner';
import {  } from './tagCreateQuery';
import {  } from './tagCreateQueryResourceObject';
import {  } from './tagCreateQueryResourceObjectRelationships';
import {  } from './tagCreateQueryResourceObjectRelationshipsTagGroup';
import {  } from './tagCreateQueryResourceObjectRelationshipsTagGroupData';
import {  } from './tagEnum';
import {  } from './tagFlowOp';
import {  } from './tagFlowOpDataInner';
import {  } from './tagGroupCreateQuery';
import {  } from './tagGroupCreateQueryResourceObject';
import {  } from './tagGroupCreateQueryResourceObjectAttributes';
import {  } from './tagGroupEnum';
import {  } from './tagGroupResponseObjectResource';
import {  } from './tagGroupResponseObjectResourceAttributes';
import {  } from './tagGroupUpdateQuery';
import {  } from './tagGroupUpdateQueryResourceObject';
import {  } from './tagGroupUpdateQueryResourceObjectAttributes';
import {  } from './tagListOp';
import {  } from './tagListOpDataInner';
import {  } from './tagResponseObjectResource';
import {  } from './tagResponseObjectResourceAttributes';
import {  } from './tagSegmentOp';
import {  } from './tagSegmentOpDataInner';
import {  } from './tagUpdateQuery';
import {  } from './tagUpdateQueryResourceObject';
import {  } from './targetDateAction';
import {  } from './targetDateActionData';
import {  } from './teaser';
import {  } from './teaserStyles';
import {  } from './templateCloneQuery';
import {  } from './templateCloneQueryResourceObject';
import {  } from './templateCloneQueryResourceObjectAttributes';
import {  } from './templateCreateHtmlOrDndQuery';
import {  } from './templateCreateHtmlOrDndQueryResourceObject';
import {  } from './templateCreateHtmlOrDndQueryResourceObjectAttributes';
import {  } from './templateDefinition';
import {  } from './templateDefinitionStylesInner';
import {  } from './templateDndResponseObjectResource';
import {  } from './templateEnum';
import {  } from './templateRenderQuery';
import {  } from './templateRenderQueryResourceObject';
import {  } from './templateRenderQueryResourceObjectAttributes';
import {  } from './templateResponseObjectResource';
import {  } from './templateResponseObjectResourceAttributes';
import {  } from './templateUniversalContentEnum';
import {  } from './templateUpdateHtmlOrDndQuery';
import {  } from './templateUpdateHtmlOrDndQueryResourceObject';
import {  } from './templateUpdateHtmlOrDndQueryResourceObjectAttributes';
import {  } from './text';
import {  } from './textBlockDataV0';
import {  } from './textBlockDataV1';
import {  } from './textBlockStylesV0';
import {  } from './textBlockStylesV1';
import {  } from './textBlockV0';
import {  } from './textBlockV1';
import {  } from './textProperties';
import {  } from './textStyleStyles';
import {  } from './textStyleV0';
import {  } from './textStyleV1';
import {  } from './textStyles';
import {  } from './throttledSendStrategy';
import {  } from './timeDelayAction';
import {  } from './timeDelayActionData';
import {  } from './timeframe';
import {  } from './trackingParamDTO';
import {  } from './trackingParamDTOCampaign';
import {  } from './trackingParamDTOFlow';
import {  } from './trackingSettingEnum';
import {  } from './trackingSettingPartialUpdateQuery';
import {  } from './trackingSettingPartialUpdateQueryResourceObject';
import {  } from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
import {  } from './trackingSettingResponseObjectResource';
import {  } from './trackingSettingResponseObjectResourceAttributes';
import {  } from './triggerBranchAction';
import {  } from './triggerBranchActionData';
import {  } from './triggerBranchActionDataTriggerFilter';
import {  } from './triggerBranchActionDataTriggerFilterConditionGroupsInner';
import {  } from './triggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner';
import {  } from './uRLPatterns';
import {  } from './uRLPatternsProperties';
import {  } from './unidentifiedProfiles';
import {  } from './uniqueCouponConfig';
import {  } from './universalContentCreateQuery';
import {  } from './universalContentCreateQueryResourceObject';
import {  } from './universalContentCreateQueryResourceObjectAttributes';
import {  } from './universalContentCreateQueryResourceObjectAttributesDefinition';
import {  } from './universalContentPartialUpdateQuery';
import {  } from './universalContentPartialUpdateQueryResourceObject';
import {  } from './universalContentPartialUpdateQueryResourceObjectAttributes';
import {  } from './universalContentPartialUpdateQueryResourceObjectAttributesDefinition';
import {  } from './universalContentResponseObjectResource';
import {  } from './universalContentResponseObjectResourceAttributes';
import {  } from './universalContentResponseObjectResourceAttributesDefinition';
import {  } from './unsubscriptionChannels';
import {  } from './unsubscriptionParameters';
import {  } from './unsupportedBlock';
import {  } from './unsupportedSendStrategy';
import {  } from './updateProfileAction';
import {  } from './updateProfileActionData';
import {  } from './updateProfileActionDataProfileOperationsInner';
import {  } from './utmParam';
import {  } from './valuesData';
import {  } from './variableTimerConfiguration';
import {  } from './version';
import {  } from './versionProperties';
import {  } from './versionStyles';
import {  } from './versionTriggersInner';
import {  } from './videoBlockData';
import {  } from './videoBlockProperties';
import {  } from './videoBlockStyles';
import {  } from './videoBlockV0';
import {  } from './videoBlockV1';
import {  } from './visibility';
import {  } from './webFeedCreateQuery';
import {  } from './webFeedCreateQueryResourceObject';
import {  } from './webFeedCreateQueryResourceObjectAttributes';
import {  } from './webFeedEnum';
import {  } from './webFeedPartialUpdateQuery';
import {  } from './webFeedPartialUpdateQueryResourceObject';
import {  } from './webFeedPartialUpdateQueryResourceObjectAttributes';
import {  } from './webFeedResponseObjectResource';
import {  } from './webFeedResponseObjectResourceAttributes';
import {  } from './webhookCreateQuery';
import {  } from './webhookCreateQueryResourceObject';
import {  } from './webhookCreateQueryResourceObjectAttributes';
import {  } from './webhookCreateQueryResourceObjectRelationships';
import {  } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopics';
import {  } from './webhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner';
import {  } from './webhookEnum';
import {  } from './webhookPartialUpdateQuery';
import {  } from './webhookPartialUpdateQueryResourceObject';
import {  } from './webhookPartialUpdateQueryResourceObjectAttributes';
import {  } from './webhookPartialUpdateQueryResourceObjectRelationships';
import {  } from './webhookResponseObjectResource';
import {  } from './webhookResponseObjectResourceAttributes';
import {  } from './webhookTopicEnum';
import {  } from './webhookTopicResponseObjectResource';
import {  } from './whatsAppSubscriptionParameters';
import {  } from './whatsAppUnsubscriptionParameters';
import {  } from './whatsappChannel';
import {  } from './whatsappConversationalChannel';
import {  } from './whatsappMarketingChannel';
import {  } from './whatsappTransactionalChannel';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ABTestSendStrategy.MethodEnum": ABTestSendStrategy.MethodEnum,
        "APIMethodFilter.FieldEnum": APIMethodFilter.FieldEnum,
        "APIMethodFilter.MethodEnum": APIMethodFilter.MethodEnum,
        "AbTestAction.TypeEnum": AbTestAction.TypeEnum,
        "AbTestActionData.StatusEnum": AbTestActionData.StatusEnum,
        "AbTestActionData.ExperimentStatusEnum": AbTestActionData.ExperimentStatusEnum,
        "AbTestActionDataCurrentExperiment.WinnerMetricEnum": AbTestActionDataCurrentExperiment.WinnerMetricEnum,
        "AccountEnum": AccountEnum,
        "ActionOutputCondition.TypeEnum": ActionOutputCondition.TypeEnum,
        "ActionOutputSplitAction.TypeEnum": ActionOutputSplitAction.TypeEnum,
        "AfterCloseTimeout.TypeEnum": AfterCloseTimeout.TypeEnum,
        "AgeGate.TypeEnum": AgeGate.TypeEnum,
        "AgeGate.DisplayDeviceEnum": AgeGate.DisplayDeviceEnum,
        "AgeGateProperties.DisplayDeviceEnum": AgeGateProperties.DisplayDeviceEnum,
        "AgeGateProperties.PropertyNameEnum": AgeGateProperties.PropertyNameEnum,
        "AgeGateProperties.SmsCountryCodeEnum": AgeGateProperties.SmsCountryCodeEnum,
        "AlltimeDateFilter.TypeEnum": AlltimeDateFilter.TypeEnum,
        "AlltimeDateFilter.OperatorEnum": AlltimeDateFilter.OperatorEnum,
        "AnniversaryDateFilter.TypeEnum": AnniversaryDateFilter.TypeEnum,
        "AnniversaryDateFilter.OperatorEnum": AnniversaryDateFilter.OperatorEnum,
        "AttributionEnum": AttributionEnum,
        "BackInStock.TypeEnum": BackInStock.TypeEnum,
        "BackInStockDelayAction.TypeEnum": BackInStockDelayAction.TypeEnum,
        "BackInStockDynamicButtonBorderStyles.StyleEnum": BackInStockDynamicButtonBorderStyles.StyleEnum,
        "BackInStockDynamicButtonData.DisplayEnum": BackInStockDynamicButtonData.DisplayEnum,
        "BackInStockDynamicButtonStyles.WidthEnum": BackInStockDynamicButtonStyles.WidthEnum,
        "BackInStockDynamicButtonStyles.AlignmentEnum": BackInStockDynamicButtonStyles.AlignmentEnum,
        "BackInStockDynamicButtonTextStyles.FontFamilyEnum": BackInStockDynamicButtonTextStyles.FontFamilyEnum,
        "BackInStockDynamicButtonTextStyles.FontWeightEnum": BackInStockDynamicButtonTextStyles.FontWeightEnum,
        "BackInStockEmailConsentCheckbox.TypeEnum": BackInStockEmailConsentCheckbox.TypeEnum,
        "BackInStockEmailConsentCheckboxProperties.DisplayDeviceEnum": BackInStockEmailConsentCheckboxProperties.DisplayDeviceEnum,
        "BackInStockEmailConsentCheckboxProperties.PropertyNameEnum": BackInStockEmailConsentCheckboxProperties.PropertyNameEnum,
        "BackInStockEmailConsentCheckboxProperties.PlaceholderEnum": BackInStockEmailConsentCheckboxProperties.PlaceholderEnum,
        "BackInStockEmailConsentCheckboxStyles.HorizontalAlignmentEnum": BackInStockEmailConsentCheckboxStyles.HorizontalAlignmentEnum,
        "BackInStockMethodFilter.FieldEnum": BackInStockMethodFilter.FieldEnum,
        "BackInStockMethodFilter.MethodEnum": BackInStockMethodFilter.MethodEnum,
        "BackInStockSubscriptionEnum": BackInStockSubscriptionEnum,
        "BackgroundImageStyles.HorizontalAlignmentEnum": BackgroundImageStyles.HorizontalAlignmentEnum,
        "BackgroundImageStyles.PositionEnum": BackgroundImageStyles.PositionEnum,
        "BackgroundImageStyles.VerticalAlignmentEnum": BackgroundImageStyles.VerticalAlignmentEnum,
        "BannerStyles.DesktopPositionEnum": BannerStyles.DesktopPositionEnum,
        "BannerStyles.MobilePositionEnum": BannerStyles.MobilePositionEnum,
        "BaseStyle.StyleTypeEnum": BaseStyle.StyleTypeEnum,
        "BaseStyleStyles.BackgroundFormatEnum": BaseStyleStyles.BackgroundFormatEnum,
        "BaseStyleStyles.BackgroundPositionEnum": BaseStyleStyles.BackgroundPositionEnum,
        "BaseStyleStyles.BorderStyleEnum": BaseStyleStyles.BorderStyleEnum,
        "BlockDisplayOptions.ShowOnEnum": BlockDisplayOptions.ShowOnEnum,
        "BooleanFilter.TypeEnum": BooleanFilter.TypeEnum,
        "BooleanFilter.OperatorEnum": BooleanFilter.OperatorEnum,
        "BorderStyle.StyleEnum": BorderStyle.StyleEnum,
        "BounceDateFilter.FieldEnum": BounceDateFilter.FieldEnum,
        "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes.StatusEnum,
        "BulkRemoveMethodFilter.FieldEnum": BulkRemoveMethodFilter.FieldEnum,
        "BulkRemoveMethodFilter.MethodEnum": BulkRemoveMethodFilter.MethodEnum,
        "Button.TypeEnum": Button.TypeEnum,
        "ButtonBlockStyles.BorderStyleEnum": ButtonBlockStyles.BorderStyleEnum,
        "ButtonBlockStyles.FontStyleEnum": ButtonBlockStyles.FontStyleEnum,
        "ButtonBlockStyles.TextAlignEnum": ButtonBlockStyles.TextAlignEnum,
        "ButtonBlockV0.ContentTypeEnum": ButtonBlockV0.ContentTypeEnum,
        "ButtonBlockV0.TypeEnum": ButtonBlockV0.TypeEnum,
        "ButtonBlockV1.ContentTypeEnum": ButtonBlockV1.ContentTypeEnum,
        "ButtonBlockV1.TypeEnum": ButtonBlockV1.TypeEnum,
        "ButtonProperties.DisplayDeviceEnum": ButtonProperties.DisplayDeviceEnum,
        "ButtonStyles.WidthEnum": ButtonStyles.WidthEnum,
        "CalendarDateFilter.TypeEnum": CalendarDateFilter.TypeEnum,
        "CalendarDateFilter.OperatorEnum": CalendarDateFilter.OperatorEnum,
        "CampaignEnum": CampaignEnum,
        "CampaignMessageEnum": CampaignMessageEnum,
        "CampaignMessageIncrement.BadgeConfigEnum": CampaignMessageIncrement.BadgeConfigEnum,
        "CampaignMessageProperty.BadgeConfigEnum": CampaignMessageProperty.BadgeConfigEnum,
        "CampaignMessageStaticCount.BadgeConfigEnum": CampaignMessageStaticCount.BadgeConfigEnum,
        "CampaignRecipientEstimationEnum": CampaignRecipientEstimationEnum,
        "CampaignRecipientEstimationJobEnum": CampaignRecipientEstimationJobEnum,
        "CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum": CampaignRecipientEstimationJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignResponseObjectResourceAttributes.StatusEnum": CampaignResponseObjectResourceAttributes.StatusEnum,
        "CampaignSendJobEnum": CampaignSendJobEnum,
        "CampaignSendJobPartialUpdateQueryResourceObjectAttributes.ActionEnum": CampaignSendJobPartialUpdateQueryResourceObjectAttributes.ActionEnum,
        "CampaignSendJobResponseObjectResourceAttributes.StatusEnum": CampaignSendJobResponseObjectResourceAttributes.StatusEnum,
        "CampaignTrackingSettingDynamicParam.TypeEnum": CampaignTrackingSettingDynamicParam.TypeEnum,
        "CampaignTrackingSettingDynamicParam.ValueEnum": CampaignTrackingSettingDynamicParam.ValueEnum,
        "CampaignTrackingSettingStaticParam.TypeEnum": CampaignTrackingSettingStaticParam.TypeEnum,
        "CampaignValuesReportEnum": CampaignValuesReportEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum": CampaignValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "CampaignValuesRequestDTOResourceObjectAttributes.GroupByEnum": CampaignValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "CarrierDeactivationMethodFilter.FieldEnum": CarrierDeactivationMethodFilter.FieldEnum,
        "CarrierDeactivationMethodFilter.MethodEnum": CarrierDeactivationMethodFilter.MethodEnum,
        "CartItemCount.TypeEnum": CartItemCount.TypeEnum,
        "CartItemCountProperties.ComparisonEnum": CartItemCountProperties.ComparisonEnum,
        "CartProduct.TypeEnum": CartProduct.TypeEnum,
        "CartProductProperties.TypeEnum": CartProductProperties.TypeEnum,
        "CartValue.TypeEnum": CartValue.TypeEnum,
        "CartValueProperties.ComparisonEnum": CartValueProperties.ComparisonEnum,
        "CatalogCategoryBulkCreateJobEnum": CatalogCategoryBulkCreateJobEnum,
        "CatalogCategoryBulkDeleteJobEnum": CatalogCategoryBulkDeleteJobEnum,
        "CatalogCategoryBulkUpdateJobEnum": CatalogCategoryBulkUpdateJobEnum,
        "CatalogCategoryCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogCategoryCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogCategoryEnum": CatalogCategoryEnum,
        "CatalogItemBulkCreateJobEnum": CatalogItemBulkCreateJobEnum,
        "CatalogItemBulkDeleteJobEnum": CatalogItemBulkDeleteJobEnum,
        "CatalogItemBulkUpdateJobEnum": CatalogItemBulkUpdateJobEnum,
        "CatalogItemCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogItemCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogItemEnum": CatalogItemEnum,
        "CatalogVariantBulkCreateJobEnum": CatalogVariantBulkCreateJobEnum,
        "CatalogVariantBulkDeleteJobEnum": CatalogVariantBulkDeleteJobEnum,
        "CatalogVariantBulkUpdateJobEnum": CatalogVariantBulkUpdateJobEnum,
        "CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum": CatalogVariantCreateQueryResourceObjectAttributes.IntegrationTypeEnum,
        "CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantCreateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "CatalogVariantEnum": CatalogVariantEnum,
        "CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum": CatalogVariantResponseObjectResourceAttributes.InventoryPolicyEnum,
        "CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum": CatalogVariantUpdateQueryResourceObjectAttributes.InventoryPolicyEnum,
        "Channel.TypeEnum": Channel.TypeEnum,
        "ChannelProperties.ChannelEnum": ChannelProperties.ChannelEnum,
        "Checkboxes.TypeEnum": Checkboxes.TypeEnum,
        "CheckboxesProperties.DisplayDeviceEnum": CheckboxesProperties.DisplayDeviceEnum,
        "CheckboxesStyles.ArrangementEnum": CheckboxesStyles.ArrangementEnum,
        "CheckboxesStyles.AlignmentEnum": CheckboxesStyles.AlignmentEnum,
        "CheckoutMethodFilter.FieldEnum": CheckoutMethodFilter.FieldEnum,
        "CheckoutMethodFilter.MethodEnum": CheckoutMethodFilter.MethodEnum,
        "Close.TypeEnum": Close.TypeEnum,
        "CodeAction.TypeEnum": CodeAction.TypeEnum,
        "ConditionalBranchAction.TypeEnum": ConditionalBranchAction.TypeEnum,
        "ConstantContactIntegrationFilter.TypeEnum": ConstantContactIntegrationFilter.TypeEnum,
        "ConstantContactIntegrationFilter.OperatorEnum": ConstantContactIntegrationFilter.OperatorEnum,
        "ConstantContactIntegrationFilter.ValueEnum": ConstantContactIntegrationFilter.ValueEnum,
        "ConstantContactIntegrationMethodFilter.FieldEnum": ConstantContactIntegrationMethodFilter.FieldEnum,
        "ConstantContactIntegrationMethodFilter.MethodEnum": ConstantContactIntegrationMethodFilter.MethodEnum,
        "ContentExperimentAction.TypeEnum": ContentExperimentAction.TypeEnum,
        "ConversationEnum": ConversationEnum,
        "ConversationMessageEnum": ConversationMessageEnum,
        "CountdownDelayAction.TypeEnum": CountdownDelayAction.TypeEnum,
        "CountdownDelayActionData.UnitEnum": CountdownDelayActionData.UnitEnum,
        "CountdownDelayActionData.TimezoneEnum": CountdownDelayActionData.TimezoneEnum,
        "CountdownDelayActionData.DelayUntilWeekdaysEnum": CountdownDelayActionData.DelayUntilWeekdaysEnum,
        "CountdownTimer.TypeEnum": CountdownTimer.TypeEnum,
        "CountdownTimerProperties.DisplayDeviceEnum": CountdownTimerProperties.DisplayDeviceEnum,
        "CountdownTimerProperties.ClockFaceEnum": CountdownTimerProperties.ClockFaceEnum,
        "CountdownTimerProperties.AnimationEnum": CountdownTimerProperties.AnimationEnum,
        "CountdownTimerStyles.LabelFontWeightEnum": CountdownTimerStyles.LabelFontWeightEnum,
        "Coupon.TypeEnum": Coupon.TypeEnum,
        "CouponBlockStyles.BorderStyleEnum": CouponBlockStyles.BorderStyleEnum,
        "CouponBlockStyles.FontStyleEnum": CouponBlockStyles.FontStyleEnum,
        "CouponBlockStyles.TextAlignEnum": CouponBlockStyles.TextAlignEnum,
        "CouponBlockV0.ContentTypeEnum": CouponBlockV0.ContentTypeEnum,
        "CouponBlockV0.TypeEnum": CouponBlockV0.TypeEnum,
        "CouponBlockV1.ContentTypeEnum": CouponBlockV1.ContentTypeEnum,
        "CouponBlockV1.TypeEnum": CouponBlockV1.TypeEnum,
        "CouponCodeBulkCreateJobEnum": CouponCodeBulkCreateJobEnum,
        "CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum": CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeEnum": CouponCodeEnum,
        "CouponCodeResponseObjectResourceAttributes.StatusEnum": CouponCodeResponseObjectResourceAttributes.StatusEnum,
        "CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum": CouponCodeUpdateQueryResourceObjectAttributes.StatusEnum,
        "CouponEnum": CouponEnum,
        "CouponProperties.DisplayDeviceEnum": CouponProperties.DisplayDeviceEnum,
        "CustomJavascript.TypeEnum": CustomJavascript.TypeEnum,
        "CustomMetricDefinition.AggregationMethodEnum": CustomMetricDefinition.AggregationMethodEnum,
        "CustomMetricEnum": CustomMetricEnum,
        "CustomObjectPropertyCondition.TypeEnum": CustomObjectPropertyCondition.TypeEnum,
        "CustomObjectTriggerCondition.TypeEnum": CustomObjectTriggerCondition.TypeEnum,
        "CustomSourceFilter.FieldEnum": CustomSourceFilter.FieldEnum,
        "DataPrivacyDeletionJobEnum": DataPrivacyDeletionJobEnum,
        "DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum": DataSourceCreateQueryResourceObjectAttributes.VisibilityEnum,
        "DataSourceEnum": DataSourceEnum,
        "DataSourceRecordBulkCreateJobEnum": DataSourceRecordBulkCreateJobEnum,
        "DataSourceRecordCreateJobEnum": DataSourceRecordCreateJobEnum,
        "DataSourceRecordEnum": DataSourceRecordEnum,
        "DataSourceResponseObjectResourceAttributes.VisibilityEnum": DataSourceResponseObjectResourceAttributes.VisibilityEnum,
        "DataWarehouseImportMethodFilter.FieldEnum": DataWarehouseImportMethodFilter.FieldEnum,
        "DataWarehouseImportMethodFilter.MethodEnum": DataWarehouseImportMethodFilter.MethodEnum,
        "DateProperties.DisplayDeviceEnum": DateProperties.DisplayDeviceEnum,
        "Delay.TypeEnum": Delay.TypeEnum,
        "Device.TypeEnum": Device.TypeEnum,
        "DeviceMetadata.KlaviyoSdkEnum": DeviceMetadata.KlaviyoSdkEnum,
        "DeviceMetadata.OsNameEnum": DeviceMetadata.OsNameEnum,
        "DeviceMetadata.EnvironmentEnum": DeviceMetadata.EnvironmentEnum,
        "DeviceProperties.DeviceEnum": DeviceProperties.DeviceEnum,
        "DisplayOptions.ShowOnEnum": DisplayOptions.ShowOnEnum,
        "DoubleOptinFilter.FieldEnum": DoubleOptinFilter.FieldEnum,
        "DropShadowBlockStyles.ShadowColorEnum": DropShadowBlockStyles.ShadowColorEnum,
        "DropShadowBlockV0.ContentTypeEnum": DropShadowBlockV0.ContentTypeEnum,
        "DropShadowBlockV0.TypeEnum": DropShadowBlockV0.TypeEnum,
        "DropShadowBlockV1.ContentTypeEnum": DropShadowBlockV1.ContentTypeEnum,
        "DropShadowBlockV1.TypeEnum": DropShadowBlockV1.TypeEnum,
        "Dropdown.TypeEnum": Dropdown.TypeEnum,
        "DropdownProperties.DisplayDeviceEnum": DropdownProperties.DisplayDeviceEnum,
        "DynamicButton.TypeEnum": DynamicButton.TypeEnum,
        "DynamicReviewBlockProperties.VerifiedBadgeLanguageEnum": DynamicReviewBlockProperties.VerifiedBadgeLanguageEnum,
        "DynamicReviewBlockProperties.FallbackOptionsEnum": DynamicReviewBlockProperties.FallbackOptionsEnum,
        "DynamicReviewBlockProperties.FallbackContentTypeEnum": DynamicReviewBlockProperties.FallbackContentTypeEnum,
        "DynamicReviewBlockProperties.ProductSelectionModeEnum": DynamicReviewBlockProperties.ProductSelectionModeEnum,
        "DynamicTrackingParam.TypeEnum": DynamicTrackingParam.TypeEnum,
        "DynamicTrackingParam.ValueEnum": DynamicTrackingParam.ValueEnum,
        "EffectiveDateFilter.FieldEnum": EffectiveDateFilter.FieldEnum,
        "Email.TypeEnum": Email.TypeEnum,
        "EmailMarketingSuppression.ReasonEnum": EmailMarketingSuppression.ReasonEnum,
        "EmailMessageDefinition.ChannelEnum": EmailMessageDefinition.ChannelEnum,
        "EmailProperties.DisplayDeviceEnum": EmailProperties.DisplayDeviceEnum,
        "EmailProperties.PropertyNameEnum": EmailProperties.PropertyNameEnum,
        "EncodedFormResponseObjectResourceAttributes.StatusEnum": EncodedFormResponseObjectResourceAttributes.StatusEnum,
        "EqualsStringFilter.TypeEnum": EqualsStringFilter.TypeEnum,
        "EqualsStringFilter.OperatorEnum": EqualsStringFilter.OperatorEnum,
        "EventBulkCreateEnum": EventBulkCreateEnum,
        "EventBulkCreateJobEnum": EventBulkCreateJobEnum,
        "EventEnum": EventEnum,
        "ExistenceOperatorExistenceFilter.TypeEnum": ExistenceOperatorExistenceFilter.TypeEnum,
        "ExistenceOperatorExistenceFilter.OperatorEnum": ExistenceOperatorExistenceFilter.OperatorEnum,
        "ExitIntent.TypeEnum": ExitIntent.TypeEnum,
        "ExplicitlyReachable.ReachableStatusEnum": ExplicitlyReachable.ReachableStatusEnum,
        "ExplicitlyUnreachable.ReachableStatusEnum": ExplicitlyUnreachable.ReachableStatusEnum,
        "FailedAgeGateMethodFilter.FieldEnum": FailedAgeGateMethodFilter.FieldEnum,
        "FailedAgeGateMethodFilter.MethodEnum": FailedAgeGateMethodFilter.MethodEnum,
        "FixedTimerConfiguration.TypeEnum": FixedTimerConfiguration.TypeEnum,
        "FixedTimerConfiguration.TimezoneEnum": FixedTimerConfiguration.TimezoneEnum,
        "FlowActionEnum": FlowActionEnum,
        "FlowEnum": FlowEnum,
        "FlowMessageEnum": FlowMessageEnum,
        "FlowPushNotification.OnOpenEnum": FlowPushNotification.OnOpenEnum,
        "FlowPushNotification.PushTypeEnum": FlowPushNotification.PushTypeEnum,
        "FlowResponseObjectResourceAttributes.TriggerTypeEnum": FlowResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowSeriesReportEnum": FlowSeriesReportEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FlowSeriesRequestDTOResourceObjectAttributes.GroupByEnum": FlowSeriesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FlowTrackingSettingDynamicParam.TypeEnum": FlowTrackingSettingDynamicParam.TypeEnum,
        "FlowTrackingSettingDynamicParam.ValueEnum": FlowTrackingSettingDynamicParam.ValueEnum,
        "FlowTrackingSettingStaticParam.TypeEnum": FlowTrackingSettingStaticParam.TypeEnum,
        "FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum": FlowV2ResponseObjectResourceAttributes.TriggerTypeEnum,
        "FlowValuesReportEnum": FlowValuesReportEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FlowValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FlowValuesRequestDTOResourceObjectAttributes.GroupByEnum": FlowValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FlowsProfileMetricCondition.TypeEnum": FlowsProfileMetricCondition.TypeEnum,
        "FlowsProfileMetricCondition.MeasurementEnum": FlowsProfileMetricCondition.MeasurementEnum,
        "FormCreateQueryResourceObjectAttributes.StatusEnum": FormCreateQueryResourceObjectAttributes.StatusEnum,
        "FormEnum": FormEnum,
        "FormMethodFilter.FieldEnum": FormMethodFilter.FieldEnum,
        "FormMethodFilter.MethodEnum": FormMethodFilter.MethodEnum,
        "FormResponseObjectResourceAttributes.StatusEnum": FormResponseObjectResourceAttributes.StatusEnum,
        "FormSeriesReportEnum": FormSeriesReportEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": FormSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum": FormSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum": FormSeriesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormSubscribeFilter.FieldEnum": FormSubscribeFilter.FieldEnum,
        "FormSubscribeFilter.MethodEnum": FormSubscribeFilter.MethodEnum,
        "FormValuesReportEnum": FormValuesReportEnum,
        "FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum": FormValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "FormValuesRequestDTOResourceObjectAttributes.GroupByEnum": FormValuesRequestDTOResourceObjectAttributes.GroupByEnum,
        "FormVersionEnum": FormVersionEnum,
        "FormVersionResponseObjectResourceAttributes.FormTypeEnum": FormVersionResponseObjectResourceAttributes.FormTypeEnum,
        "FormVersionResponseObjectResourceAttributes.StatusEnum": FormVersionResponseObjectResourceAttributes.StatusEnum,
        "GoToInbox.TypeEnum": GoToInbox.TypeEnum,
        "GoToInbox.PropertiesEnum": GoToInbox.PropertiesEnum,
        "GreaterThanPositiveNumericFilter.TypeEnum": GreaterThanPositiveNumericFilter.TypeEnum,
        "GreaterThanPositiveNumericFilter.OperatorEnum": GreaterThanPositiveNumericFilter.OperatorEnum,
        "HTMLBlockV0.ContentTypeEnum": HTMLBlockV0.ContentTypeEnum,
        "HTMLBlockV0.TypeEnum": HTMLBlockV0.TypeEnum,
        "HTMLBlockV1.ContentTypeEnum": HTMLBlockV1.ContentTypeEnum,
        "HTMLBlockV1.TypeEnum": HTMLBlockV1.TypeEnum,
        "HTMLText.TypeEnum": HTMLText.TypeEnum,
        "HTMLTextProperties.DisplayDeviceEnum": HTMLTextProperties.DisplayDeviceEnum,
        "HasEmailMarketing.SubscriptionEnum": HasEmailMarketing.SubscriptionEnum,
        "HasEmailMarketingConsent.ChannelEnum": HasEmailMarketingConsent.ChannelEnum,
        "HasEmailMarketingNeverSubscribed.SubscriptionEnum": HasEmailMarketingNeverSubscribed.SubscriptionEnum,
        "HasEmailMarketingSubscribed.SubscriptionEnum": HasEmailMarketingSubscribed.SubscriptionEnum,
        "HasPushMarketing.SubscriptionEnum": HasPushMarketing.SubscriptionEnum,
        "HasPushMarketingConsent.ChannelEnum": HasPushMarketingConsent.ChannelEnum,
        "HasSMSMarketingConsent.ChannelEnum": HasSMSMarketingConsent.ChannelEnum,
        "HasSMSMarketingSubscribed.SubscriptionEnum": HasSMSMarketingSubscribed.SubscriptionEnum,
        "HeaderBlockStyles.BorderStyleEnum": HeaderBlockStyles.BorderStyleEnum,
        "HeaderBlockStyles.DesktopLayoutEnum": HeaderBlockStyles.DesktopLayoutEnum,
        "HeaderBlockStyles.FontStyleEnum": HeaderBlockStyles.FontStyleEnum,
        "HeaderBlockStyles.ItemAlignEnum": HeaderBlockStyles.ItemAlignEnum,
        "HeaderBlockStyles.ItemSpacingTypeEnum": HeaderBlockStyles.ItemSpacingTypeEnum,
        "HeaderBlockStyles.LogoAlignEnum": HeaderBlockStyles.LogoAlignEnum,
        "HeaderBlockStyles.MobileLayoutEnum": HeaderBlockStyles.MobileLayoutEnum,
        "HeaderBlockStyles.VerticalAlignEnum": HeaderBlockStyles.VerticalAlignEnum,
        "HeaderBlockV0.ContentTypeEnum": HeaderBlockV0.ContentTypeEnum,
        "HeaderBlockV0.TypeEnum": HeaderBlockV0.TypeEnum,
        "HeaderBlockV1.ContentTypeEnum": HeaderBlockV1.ContentTypeEnum,
        "HeaderBlockV1.TypeEnum": HeaderBlockV1.TypeEnum,
        "HeaderImageSubBlock.TypeEnum": HeaderImageSubBlock.TypeEnum,
        "HeaderImageSubBlock.ShowOnEnum": HeaderImageSubBlock.ShowOnEnum,
        "HeaderLinkSubBlock.TypeEnum": HeaderLinkSubBlock.TypeEnum,
        "HeaderLinkSubBlock.ShowOnEnum": HeaderLinkSubBlock.ShowOnEnum,
        "HeaderLogoSubBlock.TypeEnum": HeaderLogoSubBlock.TypeEnum,
        "HeaderLogoSubBlock.ShowOnEnum": HeaderLogoSubBlock.ShowOnEnum,
        "Heading1Style.StyleTypeEnum": Heading1Style.StyleTypeEnum,
        "Heading2Style.StyleTypeEnum": Heading2Style.StyleTypeEnum,
        "Heading3Style.StyleTypeEnum": Heading3Style.StyleTypeEnum,
        "Heading4Style.StyleTypeEnum": Heading4Style.StyleTypeEnum,
        "HeadingStyleStyles.FontStyleEnum": HeadingStyleStyles.FontStyleEnum,
        "HeadingStyleStyles.TextAlignEnum": HeadingStyleStyles.TextAlignEnum,
        "HorizontalRuleBlockStyles.BorderStyleEnum": HorizontalRuleBlockStyles.BorderStyleEnum,
        "HorizontalRuleBlockV0.ContentTypeEnum": HorizontalRuleBlockV0.ContentTypeEnum,
        "HorizontalRuleBlockV0.TypeEnum": HorizontalRuleBlockV0.TypeEnum,
        "HorizontalRuleBlockV1.ContentTypeEnum": HorizontalRuleBlockV1.ContentTypeEnum,
        "HorizontalRuleBlockV1.TypeEnum": HorizontalRuleBlockV1.TypeEnum,
        "IdentifiedProfiles.TypeEnum": IdentifiedProfiles.TypeEnum,
        "Image.TypeEnum": Image.TypeEnum,
        "ImageBlockCroppingProperties.AspectRatioEnum": ImageBlockCroppingProperties.AspectRatioEnum,
        "ImageBlockStyles.AlignEnum": ImageBlockStyles.AlignEnum,
        "ImageBlockStyles.BlockBorderStyleEnum": ImageBlockStyles.BlockBorderStyleEnum,
        "ImageBlockV0.ContentTypeEnum": ImageBlockV0.ContentTypeEnum,
        "ImageBlockV0.TypeEnum": ImageBlockV0.TypeEnum,
        "ImageBlockV1.ContentTypeEnum": ImageBlockV1.ContentTypeEnum,
        "ImageBlockV1.TypeEnum": ImageBlockV1.TypeEnum,
        "ImageEnum": ImageEnum,
        "ImageProperties.DisplayDeviceEnum": ImageProperties.DisplayDeviceEnum,
        "ImageStyles.HorizontalAlignmentEnum": ImageStyles.HorizontalAlignmentEnum,
        "ImmediateSendStrategy.MethodEnum": ImmediateSendStrategy.MethodEnum,
        "ImplicitlyOrExplicitlyReachable.ReachableStatusEnum": ImplicitlyOrExplicitlyReachable.ReachableStatusEnum,
        "ImplicitlyOrExplicitlyUnreachable.ReachableStatusEnum": ImplicitlyOrExplicitlyUnreachable.ReachableStatusEnum,
        "ImplicitlyReachable.ReachableStatusEnum": ImplicitlyReachable.ReachableStatusEnum,
        "ImplicitlyUnreachable.ReachableStatusEnum": ImplicitlyUnreachable.ReachableStatusEnum,
        "ImportErrorEnum": ImportErrorEnum,
        "InStringArrayFilter.TypeEnum": InStringArrayFilter.TypeEnum,
        "InStringArrayFilter.OperatorEnum": InStringArrayFilter.OperatorEnum,
        "InTheLastBaseRelativeDateFilter.TypeEnum": InTheLastBaseRelativeDateFilter.TypeEnum,
        "InTheLastBaseRelativeDateFilter.OperatorEnum": InTheLastBaseRelativeDateFilter.OperatorEnum,
        "InTheLastBaseRelativeDateFilter.UnitEnum": InTheLastBaseRelativeDateFilter.UnitEnum,
        "InboundMessageMethodFilter.FieldEnum": InboundMessageMethodFilter.FieldEnum,
        "InboundMessageMethodFilter.MethodEnum": InboundMessageMethodFilter.MethodEnum,
        "Increment.BadgeConfigEnum": Increment.BadgeConfigEnum,
        "IntegerFilter.TypeEnum": IntegerFilter.TypeEnum,
        "IntegerFilter.OperatorEnum": IntegerFilter.OperatorEnum,
        "InternalScheduledReportBuilderReportData.ServiceMethodTypeEnum": InternalScheduledReportBuilderReportData.ServiceMethodTypeEnum,
        "InternalScheduledReportData.ServiceMethodTypeEnum": InternalScheduledReportData.ServiceMethodTypeEnum,
        "InternalServiceAction.TypeEnum": InternalServiceAction.TypeEnum,
        "InternalServiceActionData.StatusEnum": InternalServiceActionData.StatusEnum,
        "InternalTrackEventData.ServiceMethodTypeEnum": InternalTrackEventData.ServiceMethodTypeEnum,
        "InternalUnknownServiceData.ServiceMethodTypeEnum": InternalUnknownServiceData.ServiceMethodTypeEnum,
        "InvalidEmailDateFilter.FieldEnum": InvalidEmailDateFilter.FieldEnum,
        "IsSetExistenceFilter.TypeEnum": IsSetExistenceFilter.TypeEnum,
        "IsSetExistenceFilter.OperatorEnum": IsSetExistenceFilter.OperatorEnum,
        "LessThanPositiveNumericFilter.TypeEnum": LessThanPositiveNumericFilter.TypeEnum,
        "LessThanPositiveNumericFilter.OperatorEnum": LessThanPositiveNumericFilter.OperatorEnum,
        "LinkStyle.StyleTypeEnum": LinkStyle.StyleTypeEnum,
        "LinkStyleStyles.FontStyleEnum": LinkStyleStyles.FontStyleEnum,
        "LinkStyles.DecorationEnum": LinkStyles.DecorationEnum,
        "ListContainsOperatorListContainsFilter.TypeEnum": ListContainsOperatorListContainsFilter.TypeEnum,
        "ListContainsOperatorListContainsFilter.OperatorEnum": ListContainsOperatorListContainsFilter.OperatorEnum,
        "ListCreateQueryResourceObjectAttributes.OptInProcessEnum": ListCreateQueryResourceObjectAttributes.OptInProcessEnum,
        "ListEnum": ListEnum,
        "ListLengthFilter.TypeEnum": ListLengthFilter.TypeEnum,
        "ListLengthFilter.OperatorEnum": ListLengthFilter.OperatorEnum,
        "ListListResponseObjectResourceAttributes.OptInProcessEnum": ListListResponseObjectResourceAttributes.OptInProcessEnum,
        "ListPartialUpdateQueryResourceObjectAttributes.OptInProcessEnum": ListPartialUpdateQueryResourceObjectAttributes.OptInProcessEnum,
        "ListRegexOperatorListContainsFilter.TypeEnum": ListRegexOperatorListContainsFilter.TypeEnum,
        "ListRegexOperatorListContainsFilter.OperatorEnum": ListRegexOperatorListContainsFilter.OperatorEnum,
        "ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum": ListRetrieveResponseObjectResourceAttributes.OptInProcessEnum,
        "ListSetFilter.TypeEnum": ListSetFilter.TypeEnum,
        "ListSetFilter.OperatorEnum": ListSetFilter.OperatorEnum,
        "ListSubstringFilter.TypeEnum": ListSubstringFilter.TypeEnum,
        "ListSubstringFilter.OperatorEnum": ListSubstringFilter.OperatorEnum,
        "ListTrigger.TypeEnum": ListTrigger.TypeEnum,
        "ListUpdateAction.TypeEnum": ListUpdateAction.TypeEnum,
        "ListUpdateActionData.StatusEnum": ListUpdateActionData.StatusEnum,
        "ListsAndSegments.TypeEnum": ListsAndSegments.TypeEnum,
        "Location.TypeEnum": Location.TypeEnum,
        "LocationProperties.AllowListEnum": LocationProperties.AllowListEnum,
        "LocationProperties.DenyListEnum": LocationProperties.DenyListEnum,
        "LowInventoryCondition.TypeEnum": LowInventoryCondition.TypeEnum,
        "LowInventoryTrigger.TypeEnum": LowInventoryTrigger.TypeEnum,
        "LowInventoryTrigger.ProductLevelEnum": LowInventoryTrigger.ProductLevelEnum,
        "LowInventoryTrigger.AudienceEnum": LowInventoryTrigger.AudienceEnum,
        "MailboxProviderMethodFilter.FieldEnum": MailboxProviderMethodFilter.FieldEnum,
        "MailboxProviderMethodFilter.MethodEnum": MailboxProviderMethodFilter.MethodEnum,
        "ManualAddManualMethodFilter.FieldEnum": ManualAddManualMethodFilter.FieldEnum,
        "ManualAddManualMethodFilter.MethodEnum": ManualAddManualMethodFilter.MethodEnum,
        "ManualImportManualMethodFilter.FieldEnum": ManualImportManualMethodFilter.FieldEnum,
        "ManualImportManualMethodFilter.MethodEnum": ManualImportManualMethodFilter.MethodEnum,
        "ManualImportMethodFilter.FieldEnum": ManualImportMethodFilter.FieldEnum,
        "ManualImportMethodFilter.MethodEnum": ManualImportMethodFilter.MethodEnum,
        "ManualRemoveMethodFilter.FieldEnum": ManualRemoveMethodFilter.FieldEnum,
        "ManualRemoveMethodFilter.MethodEnum": ManualRemoveMethodFilter.MethodEnum,
        "ManualSuppressionDateFilter.FieldEnum": ManualSuppressionDateFilter.FieldEnum,
        "MappedMetricEnum": MappedMetricEnum,
        "MappedMetricPartialUpdateQueryResourceObject.IdEnum": MappedMetricPartialUpdateQueryResourceObject.IdEnum,
        "MappedMetricResponseObjectResource.IdEnum": MappedMetricResponseObjectResource.IdEnum,
        "MessageBlockedMethodFilter.FieldEnum": MessageBlockedMethodFilter.FieldEnum,
        "MessageBlockedMethodFilter.MethodEnum": MessageBlockedMethodFilter.MethodEnum,
        "MethodFilter.FieldEnum": MethodFilter.FieldEnum,
        "MethodFilter.MethodEnum": MethodFilter.MethodEnum,
        "MetricAggregateEnum": MetricAggregateEnum,
        "MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum": MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum,
        "MetricAggregateQueryResourceObjectAttributes.IntervalEnum": MetricAggregateQueryResourceObjectAttributes.IntervalEnum,
        "MetricAggregateQueryResourceObjectAttributes.ByEnum": MetricAggregateQueryResourceObjectAttributes.ByEnum,
        "MetricAggregateQueryResourceObjectAttributes.SortEnum": MetricAggregateQueryResourceObjectAttributes.SortEnum,
        "MetricEnum": MetricEnum,
        "MetricPropertyCondition.TypeEnum": MetricPropertyCondition.TypeEnum,
        "MetricPropertyEnum": MetricPropertyEnum,
        "MetricTrigger.TypeEnum": MetricTrigger.TypeEnum,
        "MobilePushMessageSilentDefinition.ChannelEnum": MobilePushMessageSilentDefinition.ChannelEnum,
        "MobilePushMessageSilentDefinition.NotificationTypeEnum": MobilePushMessageSilentDefinition.NotificationTypeEnum,
        "MobilePushMessageSilentDefinitionCreate.ChannelEnum": MobilePushMessageSilentDefinitionCreate.ChannelEnum,
        "MobilePushMessageSilentDefinitionCreate.NotificationTypeEnum": MobilePushMessageSilentDefinitionCreate.NotificationTypeEnum,
        "MobilePushMessageSilentDefinitionUpdate.ChannelEnum": MobilePushMessageSilentDefinitionUpdate.ChannelEnum,
        "MobilePushMessageSilentDefinitionUpdate.NotificationTypeEnum": MobilePushMessageSilentDefinitionUpdate.NotificationTypeEnum,
        "MobilePushMessageStandardDefinition.ChannelEnum": MobilePushMessageStandardDefinition.ChannelEnum,
        "MobilePushMessageStandardDefinition.NotificationTypeEnum": MobilePushMessageStandardDefinition.NotificationTypeEnum,
        "MobilePushMessageStandardDefinitionCreate.ChannelEnum": MobilePushMessageStandardDefinitionCreate.ChannelEnum,
        "MobilePushMessageStandardDefinitionCreate.NotificationTypeEnum": MobilePushMessageStandardDefinitionCreate.NotificationTypeEnum,
        "MobilePushMessageStandardDefinitionUpdate.ChannelEnum": MobilePushMessageStandardDefinitionUpdate.ChannelEnum,
        "MobilePushMessageStandardDefinitionUpdate.NotificationTypeEnum": MobilePushMessageStandardDefinitionUpdate.NotificationTypeEnum,
        "MobileStyle.StyleTypeEnum": MobileStyle.StyleTypeEnum,
        "ModelDate.TypeEnum": ModelDate.TypeEnum,
        "MultiBranchSplitAction.TypeEnum": MultiBranchSplitAction.TypeEnum,
        "NextStep.TypeEnum": NextStep.TypeEnum,
        "NoEmailMarketing.SubscriptionEnum": NoEmailMarketing.SubscriptionEnum,
        "NoEmailMarketingConsent.ChannelEnum": NoEmailMarketingConsent.ChannelEnum,
        "NoEmailMarketingNeverSubscribed.SubscriptionEnum": NoEmailMarketingNeverSubscribed.SubscriptionEnum,
        "NoEmailMarketingSubscribed.SubscriptionEnum": NoEmailMarketingSubscribed.SubscriptionEnum,
        "NoEmailMarketingUnsubscribed.SubscriptionEnum": NoEmailMarketingUnsubscribed.SubscriptionEnum,
        "NoPushMarketing.SubscriptionEnum": NoPushMarketing.SubscriptionEnum,
        "NoPushMarketingConsent.ChannelEnum": NoPushMarketingConsent.ChannelEnum,
        "NoSMSMarketing.SubscriptionEnum": NoSMSMarketing.SubscriptionEnum,
        "NoSMSMarketingConsent.ChannelEnum": NoSMSMarketingConsent.ChannelEnum,
        "NoSMSMarketingNeverSubscribed.SubscriptionEnum": NoSMSMarketingNeverSubscribed.SubscriptionEnum,
        "NoSMSMarketingUnsubscribed.SubscriptionEnum": NoSMSMarketingUnsubscribed.SubscriptionEnum,
        "NumericOperatorNumericFilter.TypeEnum": NumericOperatorNumericFilter.TypeEnum,
        "NumericOperatorNumericFilter.OperatorEnum": NumericOperatorNumericFilter.OperatorEnum,
        "NumericRangeFilter.TypeEnum": NumericRangeFilter.TypeEnum,
        "NumericRangeFilter.OperatorEnum": NumericRangeFilter.OperatorEnum,
        "OneClickUnsubscribeMethodFilter.FieldEnum": OneClickUnsubscribeMethodFilter.FieldEnum,
        "OneClickUnsubscribeMethodFilter.MethodEnum": OneClickUnsubscribeMethodFilter.MethodEnum,
        "OpenForm.TypeEnum": OpenForm.TypeEnum,
        "OptInCode.TypeEnum": OptInCode.TypeEnum,
        "OptInCodeProperties.PropertyNameEnum": OptInCodeProperties.PropertyNameEnum,
        "OptInCodeProperties.DisplayDeviceEnum": OptInCodeProperties.DisplayDeviceEnum,
        "PageVisits.TypeEnum": PageVisits.TypeEnum,
        "PatchMappedMetricResponseData.IdEnum": PatchMappedMetricResponseData.IdEnum,
        "PhoneNumber.TypeEnum": PhoneNumber.TypeEnum,
        "PhoneNumberConsentChannelSettings.ConsentTypeEnum": PhoneNumberConsentChannelSettings.ConsentTypeEnum,
        "PhoneNumberProperties.DisplayDeviceEnum": PhoneNumberProperties.DisplayDeviceEnum,
        "PhoneNumberProperties.SmsConsentTypeEnum": PhoneNumberProperties.SmsConsentTypeEnum,
        "PostFlowV2ResponseDataAttributes.TriggerTypeEnum": PostFlowV2ResponseDataAttributes.TriggerTypeEnum,
        "PredictiveAnalytics.RankedChannelAffinityEnum": PredictiveAnalytics.RankedChannelAffinityEnum,
        "PreferencePageFilter.FieldEnum": PreferencePageFilter.FieldEnum,
        "PreferencePageFilter.MethodEnum": PreferencePageFilter.MethodEnum,
        "PreferencePageMethodFilter.FieldEnum": PreferencePageMethodFilter.FieldEnum,
        "PreferencePageMethodFilter.MethodEnum": PreferencePageMethodFilter.MethodEnum,
        "PreviouslySubmitted.TypeEnum": PreviouslySubmitted.TypeEnum,
        "PriceDropCondition.TypeEnum": PriceDropCondition.TypeEnum,
        "PriceDropTrigger.TypeEnum": PriceDropTrigger.TypeEnum,
        "PriceDropTrigger.PriceDropAmountUnitEnum": PriceDropTrigger.PriceDropAmountUnitEnum,
        "PriceDropTrigger.AudienceEnum": PriceDropTrigger.AudienceEnum,
        "PriceDropTrigger.CurrencyTypeEnum": PriceDropTrigger.CurrencyTypeEnum,
        "ProductBlockStyles.ButtonAlignmentEnum": ProductBlockStyles.ButtonAlignmentEnum,
        "ProductBlockStyles.ButtonBorderStyleEnum": ProductBlockStyles.ButtonBorderStyleEnum,
        "ProductBlockStyles.ButtonFontStyleEnum": ProductBlockStyles.ButtonFontStyleEnum,
        "ProductBlockStyles.DescriptionFontStyleEnum": ProductBlockStyles.DescriptionFontStyleEnum,
        "ProductBlockStyles.ItemBorderStyleEnum": ProductBlockStyles.ItemBorderStyleEnum,
        "ProductBlockStyles.ItemTextAlignmentEnum": ProductBlockStyles.ItemTextAlignmentEnum,
        "ProductBlockStyles.LayoutEnum": ProductBlockStyles.LayoutEnum,
        "ProductBlockStyles.OriginalPriceFontStyleEnum": ProductBlockStyles.OriginalPriceFontStyleEnum,
        "ProductBlockStyles.PriceFontStyleEnum": ProductBlockStyles.PriceFontStyleEnum,
        "ProductBlockStyles.RatingFontStyleEnum": ProductBlockStyles.RatingFontStyleEnum,
        "ProductBlockStyles.TitleFontStyleEnum": ProductBlockStyles.TitleFontStyleEnum,
        "ProductBlockV0.ContentTypeEnum": ProductBlockV0.ContentTypeEnum,
        "ProductBlockV0.TypeEnum": ProductBlockV0.TypeEnum,
        "ProductBlockV1.ContentTypeEnum": ProductBlockV1.ContentTypeEnum,
        "ProductBlockV1.TypeEnum": ProductBlockV1.TypeEnum,
        "ProductSubBlock.TypeEnum": ProductSubBlock.TypeEnum,
        "ProfileBulkImportJobEnum": ProfileBulkImportJobEnum,
        "ProfileEnum": ProfileEnum,
        "ProfileEventTracked.TypeEnum": ProfileEventTracked.TypeEnum,
        "ProfileHasCustomObjectCondition.TypeEnum": ProfileHasCustomObjectCondition.TypeEnum,
        "ProfileHasGroupMembershipCondition.TypeEnum": ProfileHasGroupMembershipCondition.TypeEnum,
        "ProfileHasNotReceivedEmailMessageCondition.TypeEnum": ProfileHasNotReceivedEmailMessageCondition.TypeEnum,
        "ProfileHasNotReceivedPushMessageCondition.TypeEnum": ProfileHasNotReceivedPushMessageCondition.TypeEnum,
        "ProfileHasNotReceivedSmsMessageCondition.TypeEnum": ProfileHasNotReceivedSmsMessageCondition.TypeEnum,
        "ProfileImportJobResponseObjectResourceAttributes.StatusEnum": ProfileImportJobResponseObjectResourceAttributes.StatusEnum,
        "ProfileMarketingConsentCondition.TypeEnum": ProfileMarketingConsentCondition.TypeEnum,
        "ProfileMergeEnum": ProfileMergeEnum,
        "ProfileModificationMethodFilter.FieldEnum": ProfileModificationMethodFilter.FieldEnum,
        "ProfileModificationMethodFilter.MethodEnum": ProfileModificationMethodFilter.MethodEnum,
        "ProfileNoGroupMembershipCondition.TypeEnum": ProfileNoGroupMembershipCondition.TypeEnum,
        "ProfileNotInFlowCondition.TypeEnum": ProfileNotInFlowCondition.TypeEnum,
        "ProfileOperationDelete.OperatorEnum": ProfileOperationDelete.OperatorEnum,
        "ProfileOperationUpdateOrCreateBoolean.OperatorEnum": ProfileOperationUpdateOrCreateBoolean.OperatorEnum,
        "ProfileOperationUpdateOrCreateBoolean.PropertyTypeEnum": ProfileOperationUpdateOrCreateBoolean.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateDate.OperatorEnum": ProfileOperationUpdateOrCreateDate.OperatorEnum,
        "ProfileOperationUpdateOrCreateDate.PropertyTypeEnum": ProfileOperationUpdateOrCreateDate.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateList.OperatorEnum": ProfileOperationUpdateOrCreateList.OperatorEnum,
        "ProfileOperationUpdateOrCreateList.PropertyTypeEnum": ProfileOperationUpdateOrCreateList.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateList.PropertyOperationEnum": ProfileOperationUpdateOrCreateList.PropertyOperationEnum,
        "ProfileOperationUpdateOrCreateNumeric.OperatorEnum": ProfileOperationUpdateOrCreateNumeric.OperatorEnum,
        "ProfileOperationUpdateOrCreateNumeric.PropertyTypeEnum": ProfileOperationUpdateOrCreateNumeric.PropertyTypeEnum,
        "ProfileOperationUpdateOrCreateString.OperatorEnum": ProfileOperationUpdateOrCreateString.OperatorEnum,
        "ProfileOperationUpdateOrCreateString.PropertyTypeEnum": ProfileOperationUpdateOrCreateString.PropertyTypeEnum,
        "ProfilePermissionsCondition.TypeEnum": ProfilePermissionsCondition.TypeEnum,
        "ProfilePermissionsCondition.ChannelEnum": ProfilePermissionsCondition.ChannelEnum,
        "ProfilePostalCodeDistanceCondition.TypeEnum": ProfilePostalCodeDistanceCondition.TypeEnum,
        "ProfilePostalCodeDistanceCondition.UnitEnum": ProfilePostalCodeDistanceCondition.UnitEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.MeasurementEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.MeasurementEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.OperatorEnum": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter.OperatorEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.MeasurementEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.MeasurementEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum": ProfilePredictiveAnalyticsChannelAffinityRankCondition.PredictedChannelEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.TypeEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.TypeEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.OperatorEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.OperatorEnum,
        "ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum": ProfilePredictiveAnalyticsChannelAffinityRankFilter.ValueEnum,
        "ProfilePredictiveAnalyticsDateCondition.DimensionEnum": ProfilePredictiveAnalyticsDateCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsDateCondition.TypeEnum": ProfilePredictiveAnalyticsDateCondition.TypeEnum,
        "ProfilePredictiveAnalyticsNumericCondition.TypeEnum": ProfilePredictiveAnalyticsNumericCondition.TypeEnum,
        "ProfilePredictiveAnalyticsNumericCondition.DimensionEnum": ProfilePredictiveAnalyticsNumericCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringCondition.TypeEnum": ProfilePredictiveAnalyticsStringCondition.TypeEnum,
        "ProfilePredictiveAnalyticsStringCondition.DimensionEnum": ProfilePredictiveAnalyticsStringCondition.DimensionEnum,
        "ProfilePredictiveAnalyticsStringFilter.TypeEnum": ProfilePredictiveAnalyticsStringFilter.TypeEnum,
        "ProfilePredictiveAnalyticsStringFilter.OperatorEnum": ProfilePredictiveAnalyticsStringFilter.OperatorEnum,
        "ProfilePredictiveAnalyticsStringFilter.ValueEnum": ProfilePredictiveAnalyticsStringFilter.ValueEnum,
        "ProfilePropertyCondition.TypeEnum": ProfilePropertyCondition.TypeEnum,
        "ProfilePropertyDateTrigger.TypeEnum": ProfilePropertyDateTrigger.TypeEnum,
        "ProfilePropertyDateTrigger.DateFieldTypeEnum": ProfilePropertyDateTrigger.DateFieldTypeEnum,
        "ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum": ProfilePropertyDateTrigger.TimedeltaUnitBeforeDateEnum,
        "ProfilePropertyDateTrigger.RecurrenceFrequencyEnum": ProfilePropertyDateTrigger.RecurrenceFrequencyEnum,
        "ProfilePropertyDateTrigger.TimezoneEnum": ProfilePropertyDateTrigger.TimezoneEnum,
        "ProfilePropertyDateTrigger.TriggerDaysEnum": ProfilePropertyDateTrigger.TriggerDaysEnum,
        "ProfileRandomSampleCondition.TypeEnum": ProfileRandomSampleCondition.TypeEnum,
        "ProfileRegionCondition.TypeEnum": ProfileRegionCondition.TypeEnum,
        "ProfileRegionCondition.RegionEnum": ProfileRegionCondition.RegionEnum,
        "ProfileSubscriptionBulkCreateJobEnum": ProfileSubscriptionBulkCreateJobEnum,
        "ProfileSubscriptionBulkDeleteJobEnum": ProfileSubscriptionBulkDeleteJobEnum,
        "ProfileSuppressionBulkCreateJobEnum": ProfileSuppressionBulkCreateJobEnum,
        "ProfileSuppressionBulkDeleteJobEnum": ProfileSuppressionBulkDeleteJobEnum,
        "PromotionalSMSSubscription.TypeEnum": PromotionalSMSSubscription.TypeEnum,
        "PromotionalSMSSubscription.PropertiesEnum": PromotionalSMSSubscription.PropertiesEnum,
        "Property.BadgeConfigEnum": Property.BadgeConfigEnum,
        "ProvidedLandlineMethodFilter.FieldEnum": ProvidedLandlineMethodFilter.FieldEnum,
        "ProvidedLandlineMethodFilter.MethodEnum": ProvidedLandlineMethodFilter.MethodEnum,
        "ProvidedNoAgeMethodFilter.FieldEnum": ProvidedNoAgeMethodFilter.FieldEnum,
        "ProvidedNoAgeMethodFilter.MethodEnum": ProvidedNoAgeMethodFilter.MethodEnum,
        "PushActionButton.ActionTypeEnum": PushActionButton.ActionTypeEnum,
        "PushOnOpenApp.TypeEnum": PushOnOpenApp.TypeEnum,
        "PushOnOpenDeepLink.TypeEnum": PushOnOpenDeepLink.TypeEnum,
        "PushTokenCreateQueryResourceObjectAttributes.PlatformEnum": PushTokenCreateQueryResourceObjectAttributes.PlatformEnum,
        "PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum": PushTokenCreateQueryResourceObjectAttributes.EnablementStatusEnum,
        "PushTokenCreateQueryResourceObjectAttributes.VendorEnum": PushTokenCreateQueryResourceObjectAttributes.VendorEnum,
        "PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum": PushTokenCreateQueryResourceObjectAttributes.BackgroundEnum,
        "PushTokenDeviceMetadata.KlaviyoSdkEnum": PushTokenDeviceMetadata.KlaviyoSdkEnum,
        "PushTokenDeviceMetadata.OsNameEnum": PushTokenDeviceMetadata.OsNameEnum,
        "PushTokenDeviceMetadata.EnvironmentEnum": PushTokenDeviceMetadata.EnvironmentEnum,
        "PushTokenEntry.PlatformEnum": PushTokenEntry.PlatformEnum,
        "PushTokenEntry.VendorEnum": PushTokenEntry.VendorEnum,
        "PushTokenEntry.EnablementStatusEnum": PushTokenEntry.EnablementStatusEnum,
        "PushTokenEntry.BackgroundEnum": PushTokenEntry.BackgroundEnum,
        "PushTokenEnum": PushTokenEnum,
        "PushTokenResponseObjectResourceAttributes.EnablementStatusEnum": PushTokenResponseObjectResourceAttributes.EnablementStatusEnum,
        "PushTokenResponseObjectResourceAttributes.PlatformEnum": PushTokenResponseObjectResourceAttributes.PlatformEnum,
        "QuoteStyle.AlignmentEnum": QuoteStyle.AlignmentEnum,
        "RadioButtons.TypeEnum": RadioButtons.TypeEnum,
        "RadioButtonsProperties.DisplayDeviceEnum": RadioButtonsProperties.DisplayDeviceEnum,
        "RadioButtonsStyles.ArrangementEnum": RadioButtonsStyles.ArrangementEnum,
        "RadioButtonsStyles.AlignmentEnum": RadioButtonsStyles.AlignmentEnum,
        "RatingStyle.ShapeEnum": RatingStyle.ShapeEnum,
        "RatingStyle.AlignmentEnum": RatingStyle.AlignmentEnum,
        "RecordedDateFilter.FieldEnum": RecordedDateFilter.FieldEnum,
        "Redirect.TypeEnum": Redirect.TypeEnum,
        "ReentryCriteria.UnitEnum": ReentryCriteria.UnitEnum,
        "RejectReasonFake.ReasonEnum": RejectReasonFake.ReasonEnum,
        "RejectReasonMisleading.ReasonEnum": RejectReasonMisleading.ReasonEnum,
        "RejectReasonOther.ReasonEnum": RejectReasonOther.ReasonEnum,
        "RejectReasonPrivateInformation.ReasonEnum": RejectReasonPrivateInformation.ReasonEnum,
        "RejectReasonProfanity.ReasonEnum": RejectReasonProfanity.ReasonEnum,
        "RejectReasonUnrelated.ReasonEnum": RejectReasonUnrelated.ReasonEnum,
        "RelativeAnniversaryDateFilter.TypeEnum": RelativeAnniversaryDateFilter.TypeEnum,
        "RelativeAnniversaryDateFilter.OperatorEnum": RelativeAnniversaryDateFilter.OperatorEnum,
        "RelativeAnniversaryDateFilter.UnitEnum": RelativeAnniversaryDateFilter.UnitEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.TypeEnum": RelativeDateOperatorBaseRelativeDateFilter.TypeEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.OperatorEnum": RelativeDateOperatorBaseRelativeDateFilter.OperatorEnum,
        "RelativeDateOperatorBaseRelativeDateFilter.UnitEnum": RelativeDateOperatorBaseRelativeDateFilter.UnitEnum,
        "RelativeDateRangeFilter.TypeEnum": RelativeDateRangeFilter.TypeEnum,
        "RelativeDateRangeFilter.OperatorEnum": RelativeDateRangeFilter.OperatorEnum,
        "RelativeDateRangeFilter.UnitEnum": RelativeDateRangeFilter.UnitEnum,
        "ResendOptInCode.TypeEnum": ResendOptInCode.TypeEnum,
        "ResendOptInCode.PropertiesEnum": ResendOptInCode.PropertiesEnum,
        "Review.TypeEnum": Review.TypeEnum,
        "ReviewBlockStyles.AuthorAlignEnum": ReviewBlockStyles.AuthorAlignEnum,
        "ReviewBlockStyles.AuthorFontStyleEnum": ReviewBlockStyles.AuthorFontStyleEnum,
        "ReviewBlockStyles.BorderStyleEnum": ReviewBlockStyles.BorderStyleEnum,
        "ReviewBlockStyles.LayoutEnum": ReviewBlockStyles.LayoutEnum,
        "ReviewBlockStyles.ProductNameAlignEnum": ReviewBlockStyles.ProductNameAlignEnum,
        "ReviewBlockStyles.ProductNameFontStyleEnum": ReviewBlockStyles.ProductNameFontStyleEnum,
        "ReviewBlockStyles.QuoteAlignEnum": ReviewBlockStyles.QuoteAlignEnum,
        "ReviewBlockStyles.QuoteFontStyleEnum": ReviewBlockStyles.QuoteFontStyleEnum,
        "ReviewBlockStyles.QuoteStyleEnum": ReviewBlockStyles.QuoteStyleEnum,
        "ReviewBlockStyles.ShadowColorEnum": ReviewBlockStyles.ShadowColorEnum,
        "ReviewBlockStyles.StarSizeEnum": ReviewBlockStyles.StarSizeEnum,
        "ReviewBlockStyles.StarRatingShapeEnum": ReviewBlockStyles.StarRatingShapeEnum,
        "ReviewBlockStyles.StarAlignmentEnum": ReviewBlockStyles.StarAlignmentEnum,
        "ReviewBlockStyles.VerifiedFontStyleEnum": ReviewBlockStyles.VerifiedFontStyleEnum,
        "ReviewBlockStyles.VerifiedBadgeStyleEnum": ReviewBlockStyles.VerifiedBadgeStyleEnum,
        "ReviewBlockV0.ContentTypeEnum": ReviewBlockV0.ContentTypeEnum,
        "ReviewBlockV0.TypeEnum": ReviewBlockV0.TypeEnum,
        "ReviewBlockV1.ContentTypeEnum": ReviewBlockV1.ContentTypeEnum,
        "ReviewBlockV1.TypeEnum": ReviewBlockV1.TypeEnum,
        "ReviewEnum": ReviewEnum,
        "ReviewProperties.DisplayDeviceEnum": ReviewProperties.DisplayDeviceEnum,
        "ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum": ReviewResponseDTOObjectResourceAttributes.ReviewTypeEnum,
        "ReviewStatusFeatured.ValueEnum": ReviewStatusFeatured.ValueEnum,
        "ReviewStatusPending.ValueEnum": ReviewStatusPending.ValueEnum,
        "ReviewStatusPublished.ValueEnum": ReviewStatusPublished.ValueEnum,
        "ReviewStatusRejected.ValueEnum": ReviewStatusRejected.ValueEnum,
        "ReviewStatusUnpublished.ValueEnum": ReviewStatusUnpublished.ValueEnum,
        "ReviewerNameStyle.LayoutEnum": ReviewerNameStyle.LayoutEnum,
        "ReviewerNameStyle.AlignmentEnum": ReviewerNameStyle.AlignmentEnum,
        "RichTextMargin.LeftEnum": RichTextMargin.LeftEnum,
        "RichTextMargin.RightEnum": RichTextMargin.RightEnum,
        "RichTextMargin.TopEnum": RichTextMargin.TopEnum,
        "RichTextStyle.FontFamilyEnum": RichTextStyle.FontFamilyEnum,
        "RichTextStyle.FontWeightEnum": RichTextStyle.FontWeightEnum,
        "RichTextStyle.AlignmentEnum": RichTextStyle.AlignmentEnum,
        "RowStyles.ColumnLayoutEnum": RowStyles.ColumnLayoutEnum,
        "SMSConsentCheckbox.TypeEnum": SMSConsentCheckbox.TypeEnum,
        "SMSConsentCheckboxProperties.DisplayDeviceEnum": SMSConsentCheckboxProperties.DisplayDeviceEnum,
        "SMSConsentCheckboxProperties.PropertyNameEnum": SMSConsentCheckboxProperties.PropertyNameEnum,
        "SMSConsentCheckboxProperties.PlaceholderEnum": SMSConsentCheckboxProperties.PlaceholderEnum,
        "SMSConsentCheckboxProperties.ChannelsEnum": SMSConsentCheckboxProperties.ChannelsEnum,
        "SMSConsentCheckboxStyles.HorizontalAlignmentEnum": SMSConsentCheckboxStyles.HorizontalAlignmentEnum,
        "SMSDisclosure.TypeEnum": SMSDisclosure.TypeEnum,
        "SMSDisclosureAccountDefault.TypeEnum": SMSDisclosureAccountDefault.TypeEnum,
        "SMSDisclosureCustom.TypeEnum": SMSDisclosureCustom.TypeEnum,
        "SMSDisclosureProperties.DisplayDeviceEnum": SMSDisclosureProperties.DisplayDeviceEnum,
        "SMSDisclosureTextStyle.FontFamilyEnum": SMSDisclosureTextStyle.FontFamilyEnum,
        "SMSDisclosureTextStyle.FontWeightEnum": SMSDisclosureTextStyle.FontWeightEnum,
        "SMSMessageDefinition.ChannelEnum": SMSMessageDefinition.ChannelEnum,
        "SMSMessageDefinitionCreate.ChannelEnum": SMSMessageDefinitionCreate.ChannelEnum,
        "Scroll.TypeEnum": Scroll.TypeEnum,
        "SectionStyles.BackgroundFormatEnum": SectionStyles.BackgroundFormatEnum,
        "SectionStyles.BackgroundPositionEnum": SectionStyles.BackgroundPositionEnum,
        "SectionStyles.BorderStyleEnum": SectionStyles.BorderStyleEnum,
        "SectionStyles.ColumnAlignEnum": SectionStyles.ColumnAlignEnum,
        "SectionStyles.ColumnDirectionEnum": SectionStyles.ColumnDirectionEnum,
        "SectionStyles.ContentColorTypeEnum": SectionStyles.ContentColorTypeEnum,
        "SectionV0.ContentTypeEnum": SectionV0.ContentTypeEnum,
        "SectionV0.TypeEnum": SectionV0.TypeEnum,
        "SectionV1.ContentTypeEnum": SectionV1.ContentTypeEnum,
        "SectionV1.TypeEnum": SectionV1.TypeEnum,
        "SegmentEnum": SegmentEnum,
        "SegmentSeriesReportEnum": SegmentSeriesReportEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentSeriesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum": SegmentSeriesRequestDTOResourceObjectAttributes.IntervalEnum,
        "SegmentTrigger.TypeEnum": SegmentTrigger.TypeEnum,
        "SegmentValuesReportEnum": SegmentValuesReportEnum,
        "SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum": SegmentValuesRequestDTOResourceObjectAttributes.StatisticsEnum,
        "SegmentsProfileMetricCondition.TypeEnum": SegmentsProfileMetricCondition.TypeEnum,
        "SegmentsProfileMetricCondition.MeasurementEnum": SegmentsProfileMetricCondition.MeasurementEnum,
        "SegmentsProfileMetricFunnelCondition.TypeEnum": SegmentsProfileMetricFunnelCondition.TypeEnum,
        "SegmentsProfileMetricFunnelCondition.CompletionWindowSecondsEnum": SegmentsProfileMetricFunnelCondition.CompletionWindowSecondsEnum,
        "SendEmailAction.TypeEnum": SendEmailAction.TypeEnum,
        "SendEmailActionData.StatusEnum": SendEmailActionData.StatusEnum,
        "SendInternalAlertAction.TypeEnum": SendInternalAlertAction.TypeEnum,
        "SendInternalAlertActionData.StatusEnum": SendInternalAlertActionData.StatusEnum,
        "SendPushNotificationAction.TypeEnum": SendPushNotificationAction.TypeEnum,
        "SendPushNotificationActionContentExperimentActionData.StatusEnum": SendPushNotificationActionContentExperimentActionData.StatusEnum,
        "SendPushNotificationActionContentExperimentActionData.ExperimentStatusEnum": SendPushNotificationActionContentExperimentActionData.ExperimentStatusEnum,
        "SendPushNotificationActionCurrentExperiment.WinnerMetricEnum": SendPushNotificationActionCurrentExperiment.WinnerMetricEnum,
        "SendPushNotificationActionData.StatusEnum": SendPushNotificationActionData.StatusEnum,
        "SendSmsAction.TypeEnum": SendSmsAction.TypeEnum,
        "SendSmsActionData.StatusEnum": SendSmsActionData.StatusEnum,
        "SendWebhookAction.TypeEnum": SendWebhookAction.TypeEnum,
        "SendWebhookActionData.StatusEnum": SendWebhookActionData.StatusEnum,
        "SendWhatsAppAction.TypeEnum": SendWhatsAppAction.TypeEnum,
        "SendWhatsAppActionData.StatusEnum": SendWhatsAppActionData.StatusEnum,
        "ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum": ServerBISSubscriptionCreateQueryResourceObjectAttributes.ChannelsEnum,
        "SftpMethodFilter.FieldEnum": SftpMethodFilter.FieldEnum,
        "SftpMethodFilter.MethodEnum": SftpMethodFilter.MethodEnum,
        "ShopifyIntegrationFilter.TypeEnum": ShopifyIntegrationFilter.TypeEnum,
        "ShopifyIntegrationFilter.OperatorEnum": ShopifyIntegrationFilter.OperatorEnum,
        "ShopifyIntegrationFilter.ValueEnum": ShopifyIntegrationFilter.ValueEnum,
        "ShopifyIntegrationMethodFilter.FieldEnum": ShopifyIntegrationMethodFilter.FieldEnum,
        "ShopifyIntegrationMethodFilter.MethodEnum": ShopifyIntegrationMethodFilter.MethodEnum,
        "SideImageSettings.SizeEnum": SideImageSettings.SizeEnum,
        "SideImageSettings.AlignmentEnum": SideImageSettings.AlignmentEnum,
        "SideImageSettings.DeviceTypeEnum": SideImageSettings.DeviceTypeEnum,
        "SignupCounter.TypeEnum": SignupCounter.TypeEnum,
        "SignupCounterProperties.DisplayDeviceEnum": SignupCounterProperties.DisplayDeviceEnum,
        "SignupCounterProperties.TimeframeEnum": SignupCounterProperties.TimeframeEnum,
        "SinceFlowStartDateFilter.TypeEnum": SinceFlowStartDateFilter.TypeEnum,
        "SinceFlowStartDateFilter.OperatorEnum": SinceFlowStartDateFilter.OperatorEnum,
        "SkipToSuccess.TypeEnum": SkipToSuccess.TypeEnum,
        "SmartSendTimeStrategy.MethodEnum": SmartSendTimeStrategy.MethodEnum,
        "SocialBlockStyles.IconAlignEnum": SocialBlockStyles.IconAlignEnum,
        "SocialBlockStyles.IconColorEnum": SocialBlockStyles.IconColorEnum,
        "SocialBlockStyles.IconSizeEnum": SocialBlockStyles.IconSizeEnum,
        "SocialBlockStyles.LabelFontStyleEnum": SocialBlockStyles.LabelFontStyleEnum,
        "SocialBlockV0.ContentTypeEnum": SocialBlockV0.ContentTypeEnum,
        "SocialBlockV0.TypeEnum": SocialBlockV0.TypeEnum,
        "SocialBlockV1.ContentTypeEnum": SocialBlockV1.ContentTypeEnum,
        "SocialBlockV1.TypeEnum": SocialBlockV1.TypeEnum,
        "SocialIconSubBlock.TypeEnum": SocialIconSubBlock.TypeEnum,
        "SocialIconSubBlock.LinkTypeEnum": SocialIconSubBlock.LinkTypeEnum,
        "SocialSpacerSubBlock.TypeEnum": SocialSpacerSubBlock.TypeEnum,
        "SpacerBlockV0.ContentTypeEnum": SpacerBlockV0.ContentTypeEnum,
        "SpacerBlockV0.TypeEnum": SpacerBlockV0.TypeEnum,
        "SpacerBlockV1.ContentTypeEnum": SpacerBlockV1.ContentTypeEnum,
        "SpacerBlockV1.TypeEnum": SpacerBlockV1.TypeEnum,
        "SpamComplaintMethodFilter.FieldEnum": SpamComplaintMethodFilter.FieldEnum,
        "SpamComplaintMethodFilter.MethodEnum": SpamComplaintMethodFilter.MethodEnum,
        "SpinToWin.TypeEnum": SpinToWin.TypeEnum,
        "SpinToWinProperties.DisplayDeviceEnum": SpinToWinProperties.DisplayDeviceEnum,
        "SplitBlockStyles.MobileStackOrderEnum": SplitBlockStyles.MobileStackOrderEnum,
        "SplitBlockV0.ContentTypeEnum": SplitBlockV0.ContentTypeEnum,
        "SplitBlockV0.TypeEnum": SplitBlockV0.TypeEnum,
        "SplitBlockV1.ContentTypeEnum": SplitBlockV1.ContentTypeEnum,
        "SplitBlockV1.TypeEnum": SplitBlockV1.TypeEnum,
        "StaticCount.BadgeConfigEnum": StaticCount.BadgeConfigEnum,
        "StaticCouponConfig.TypeEnum": StaticCouponConfig.TypeEnum,
        "StaticDateFilter.TypeEnum": StaticDateFilter.TypeEnum,
        "StaticDateFilter.OperatorEnum": StaticDateFilter.OperatorEnum,
        "StaticDateRangeFilter.TypeEnum": StaticDateRangeFilter.TypeEnum,
        "StaticDateRangeFilter.OperatorEnum": StaticDateRangeFilter.OperatorEnum,
        "StaticReviewBlockProperties.VerifiedBadgeLanguageEnum": StaticReviewBlockProperties.VerifiedBadgeLanguageEnum,
        "StaticSendStrategy.MethodEnum": StaticSendStrategy.MethodEnum,
        "StaticTrackingParam.TypeEnum": StaticTrackingParam.TypeEnum,
        "StatusDateFilter.FieldEnum": StatusDateFilter.FieldEnum,
        "StringArrayOperatorStringArrayFilter.TypeEnum": StringArrayOperatorStringArrayFilter.TypeEnum,
        "StringArrayOperatorStringArrayFilter.OperatorEnum": StringArrayOperatorStringArrayFilter.OperatorEnum,
        "StringInArrayFilter.OperatorEnum": StringInArrayFilter.OperatorEnum,
        "StringInArrayFilter.TypeEnum": StringInArrayFilter.TypeEnum,
        "StringOperatorStringFilter.TypeEnum": StringOperatorStringFilter.TypeEnum,
        "StringOperatorStringFilter.OperatorEnum": StringOperatorStringFilter.OperatorEnum,
        "StringPhoneOperatorStringArrayFilter.TypeEnum": StringPhoneOperatorStringArrayFilter.TypeEnum,
        "StringPhoneOperatorStringArrayFilter.OperatorEnum": StringPhoneOperatorStringArrayFilter.OperatorEnum,
        "SubmitBackInStock.TypeEnum": SubmitBackInStock.TypeEnum,
        "SubmitOptInCode.TypeEnum": SubmitOptInCode.TypeEnum,
        "SubmitOptInCode.PropertiesEnum": SubmitOptInCode.PropertiesEnum,
        "SubscribeViaSMS.TypeEnum": SubscribeViaSMS.TypeEnum,
        "SubscribeViaWhatsApp.TypeEnum": SubscribeViaWhatsApp.TypeEnum,
        "SubscribedSMSIsRcsCapableFilter.FieldEnum": SubscribedSMSIsRcsCapableFilter.FieldEnum,
        "SubscriptionParameters.ConsentEnum": SubscriptionParameters.ConsentEnum,
        "TableBlockStyles.BlockBorderStyleEnum": TableBlockStyles.BlockBorderStyleEnum,
        "TableBlockStyles.CellHorizontalBorderStyleEnum": TableBlockStyles.CellHorizontalBorderStyleEnum,
        "TableBlockStyles.CellVerticalAlignEnum": TableBlockStyles.CellVerticalAlignEnum,
        "TableBlockStyles.CellVerticalBorderStyleEnum": TableBlockStyles.CellVerticalBorderStyleEnum,
        "TableBlockStyles.HeaderFontStyleEnum": TableBlockStyles.HeaderFontStyleEnum,
        "TableBlockStyles.TableTextAlignEnum": TableBlockStyles.TableTextAlignEnum,
        "TableBlockV0.ContentTypeEnum": TableBlockV0.ContentTypeEnum,
        "TableBlockV0.TypeEnum": TableBlockV0.TypeEnum,
        "TableBlockV1.ContentTypeEnum": TableBlockV1.ContentTypeEnum,
        "TableBlockV1.TypeEnum": TableBlockV1.TypeEnum,
        "TableFallbackHtmlSubBlock.ShowOnEnum": TableFallbackHtmlSubBlock.ShowOnEnum,
        "TableFallbackHtmlSubBlock.TypeEnum": TableFallbackHtmlSubBlock.TypeEnum,
        "TableFallbackImageSubBlock.ImageAlignEnum": TableFallbackImageSubBlock.ImageAlignEnum,
        "TableFallbackImageSubBlock.ShowOnEnum": TableFallbackImageSubBlock.ShowOnEnum,
        "TableFallbackImageSubBlock.CellTextAlignEnum": TableFallbackImageSubBlock.CellTextAlignEnum,
        "TableFallbackImageSubBlock.CroppingAspectRatioEnum": TableFallbackImageSubBlock.CroppingAspectRatioEnum,
        "TableFallbackImageSubBlock.TypeEnum": TableFallbackImageSubBlock.TypeEnum,
        "TableFallbackTextSubBlock.CellTextAlignEnum": TableFallbackTextSubBlock.CellTextAlignEnum,
        "TableFallbackTextSubBlock.FontStyleEnum": TableFallbackTextSubBlock.FontStyleEnum,
        "TableFallbackTextSubBlock.ShowOnEnum": TableFallbackTextSubBlock.ShowOnEnum,
        "TableFallbackTextSubBlock.TypeEnum": TableFallbackTextSubBlock.TypeEnum,
        "TableHeaderSubBlock.CellTextAlignEnum": TableHeaderSubBlock.CellTextAlignEnum,
        "TableHeaderSubBlock.FontStyleEnum": TableHeaderSubBlock.FontStyleEnum,
        "TableHeaderSubBlock.ShowOnEnum": TableHeaderSubBlock.ShowOnEnum,
        "TableHeaderSubBlock.TypeEnum": TableHeaderSubBlock.TypeEnum,
        "TableHtmlSubBlock.ShowOnEnum": TableHtmlSubBlock.ShowOnEnum,
        "TableHtmlSubBlock.TypeEnum": TableHtmlSubBlock.TypeEnum,
        "TableImageSubBlock.ImageAlignEnum": TableImageSubBlock.ImageAlignEnum,
        "TableImageSubBlock.ShowOnEnum": TableImageSubBlock.ShowOnEnum,
        "TableImageSubBlock.CellTextAlignEnum": TableImageSubBlock.CellTextAlignEnum,
        "TableImageSubBlock.CroppingAspectRatioEnum": TableImageSubBlock.CroppingAspectRatioEnum,
        "TableImageSubBlock.TypeEnum": TableImageSubBlock.TypeEnum,
        "TableTextSubBlock.CellTextAlignEnum": TableTextSubBlock.CellTextAlignEnum,
        "TableTextSubBlock.FontStyleEnum": TableTextSubBlock.FontStyleEnum,
        "TableTextSubBlock.ShowOnEnum": TableTextSubBlock.ShowOnEnum,
        "TableTextSubBlock.TypeEnum": TableTextSubBlock.TypeEnum,
        "TagEnum": TagEnum,
        "TagGroupEnum": TagGroupEnum,
        "TargetDateAction.TypeEnum": TargetDateAction.TypeEnum,
        "TargetDateActionData.TimezoneEnum": TargetDateActionData.TimezoneEnum,
        "TargetDateActionData.TargetDaysEnum": TargetDateActionData.TargetDaysEnum,
        "Teaser.DisplayOrderEnum": Teaser.DisplayOrderEnum,
        "Teaser.TeaserTypeEnum": Teaser.TeaserTypeEnum,
        "Teaser.LocationEnum": Teaser.LocationEnum,
        "Teaser.SizeEnum": Teaser.SizeEnum,
        "Teaser.DeviceTypeEnum": Teaser.DeviceTypeEnum,
        "TemplateEnum": TemplateEnum,
        "TemplateUniversalContentEnum": TemplateUniversalContentEnum,
        "Text.TypeEnum": Text.TypeEnum,
        "TextBlockStylesV0.BlockBorderStyleEnum": TextBlockStylesV0.BlockBorderStyleEnum,
        "TextBlockStylesV0.FontStyleEnum": TextBlockStylesV0.FontStyleEnum,
        "TextBlockStylesV0.TextAlignEnum": TextBlockStylesV0.TextAlignEnum,
        "TextBlockStylesV0.TextTableLayoutEnum": TextBlockStylesV0.TextTableLayoutEnum,
        "TextBlockStylesV1.BlockBorderStyleEnum": TextBlockStylesV1.BlockBorderStyleEnum,
        "TextBlockStylesV1.FontStyleEnum": TextBlockStylesV1.FontStyleEnum,
        "TextBlockStylesV1.TextAlignEnum": TextBlockStylesV1.TextAlignEnum,
        "TextBlockStylesV1.TextTableLayoutEnum": TextBlockStylesV1.TextTableLayoutEnum,
        "TextBlockV0.ContentTypeEnum": TextBlockV0.ContentTypeEnum,
        "TextBlockV0.TypeEnum": TextBlockV0.TypeEnum,
        "TextBlockV1.ContentTypeEnum": TextBlockV1.ContentTypeEnum,
        "TextBlockV1.TypeEnum": TextBlockV1.TypeEnum,
        "TextProperties.DisplayDeviceEnum": TextProperties.DisplayDeviceEnum,
        "TextStyleStyles.FontStyleEnum": TextStyleStyles.FontStyleEnum,
        "TextStyleStyles.TextAlignEnum": TextStyleStyles.TextAlignEnum,
        "TextStyleV0.FontFamilyEnum": TextStyleV0.FontFamilyEnum,
        "TextStyleV0.FontWeightEnum": TextStyleV0.FontWeightEnum,
        "TextStyleV1.StyleTypeEnum": TextStyleV1.StyleTypeEnum,
        "ThrottledSendStrategy.MethodEnum": ThrottledSendStrategy.MethodEnum,
        "ThrottledSendStrategy.ThrottlePercentageEnum": ThrottledSendStrategy.ThrottlePercentageEnum,
        "TimeDelayAction.TypeEnum": TimeDelayAction.TypeEnum,
        "TimeDelayActionData.UnitEnum": TimeDelayActionData.UnitEnum,
        "TimeDelayActionData.TimezoneEnum": TimeDelayActionData.TimezoneEnum,
        "TimeDelayActionData.DelayUntilWeekdaysEnum": TimeDelayActionData.DelayUntilWeekdaysEnum,
        "Timeframe.KeyEnum": Timeframe.KeyEnum,
        "TrackingSettingEnum": TrackingSettingEnum,
        "TriggerBranchAction.TypeEnum": TriggerBranchAction.TypeEnum,
        "TriggerBranchActionData.TriggerTypeEnum": TriggerBranchActionData.TriggerTypeEnum,
        "TriggerBranchActionData.TriggerSubtypeEnum": TriggerBranchActionData.TriggerSubtypeEnum,
        "URLPatterns.TypeEnum": URLPatterns.TypeEnum,
        "UnidentifiedProfiles.TypeEnum": UnidentifiedProfiles.TypeEnum,
        "UniqueCouponConfig.TypeEnum": UniqueCouponConfig.TypeEnum,
        "UniqueCouponConfig.IntegrationEnum": UniqueCouponConfig.IntegrationEnum,
        "UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum": UniversalContentResponseObjectResourceAttributes.ScreenshotStatusEnum,
        "UnsubscriptionParameters.ConsentEnum": UnsubscriptionParameters.ConsentEnum,
        "UnsupportedBlock.ContentTypeEnum": UnsupportedBlock.ContentTypeEnum,
        "UnsupportedBlock.TypeEnum": UnsupportedBlock.TypeEnum,
        "UnsupportedSendStrategy.MethodEnum": UnsupportedSendStrategy.MethodEnum,
        "UpdateProfileAction.TypeEnum": UpdateProfileAction.TypeEnum,
        "UpdateProfileActionData.StatusEnum": UpdateProfileActionData.StatusEnum,
        "VariableTimerConfiguration.TypeEnum": VariableTimerConfiguration.TypeEnum,
        "Version.TypeEnum": Version.TypeEnum,
        "Version.LocationEnum": Version.LocationEnum,
        "Version.StatusEnum": Version.StatusEnum,
        "Version.SpecialtiesEnum": Version.SpecialtiesEnum,
        "VersionProperties.ClickOutsideToCloseEnum": VersionProperties.ClickOutsideToCloseEnum,
        "VersionProperties.RuleBasedTriggerEvaluationEnum": VersionProperties.RuleBasedTriggerEvaluationEnum,
        "VersionStyles.WidthEnum": VersionStyles.WidthEnum,
        "VideoBlockStyles.AlignEnum": VideoBlockStyles.AlignEnum,
        "VideoBlockStyles.BorderStyleEnum": VideoBlockStyles.BorderStyleEnum,
        "VideoBlockV0.ContentTypeEnum": VideoBlockV0.ContentTypeEnum,
        "VideoBlockV0.TypeEnum": VideoBlockV0.TypeEnum,
        "VideoBlockV1.ContentTypeEnum": VideoBlockV1.ContentTypeEnum,
        "VideoBlockV1.TypeEnum": VideoBlockV1.TypeEnum,
        "WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum": WebFeedCreateQueryResourceObjectAttributes.RequestMethodEnum,
        "WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum": WebFeedCreateQueryResourceObjectAttributes.ContentTypeEnum,
        "WebFeedEnum": WebFeedEnum,
        "WebFeedPartialUpdateQueryResourceObjectAttributes.RequestMethodEnum": WebFeedPartialUpdateQueryResourceObjectAttributes.RequestMethodEnum,
        "WebFeedPartialUpdateQueryResourceObjectAttributes.ContentTypeEnum": WebFeedPartialUpdateQueryResourceObjectAttributes.ContentTypeEnum,
        "WebFeedResponseObjectResourceAttributes.RequestMethodEnum": WebFeedResponseObjectResourceAttributes.RequestMethodEnum,
        "WebFeedResponseObjectResourceAttributes.ContentTypeEnum": WebFeedResponseObjectResourceAttributes.ContentTypeEnum,
        "WebFeedResponseObjectResourceAttributes.StatusEnum": WebFeedResponseObjectResourceAttributes.StatusEnum,
        "WebhookEnum": WebhookEnum,
        "WebhookTopicEnum": WebhookTopicEnum,
}

let typeMap: {[index: string]: any} = {
    "ABTestSendStrategy": ABTestSendStrategy,
    "APIJobErrorPayload": APIJobErrorPayload,
    "APIMethodFilter": APIMethodFilter,
    "AbTestAction": AbTestAction,
    "AbTestActionData": AbTestActionData,
    "AbTestActionDataCurrentExperiment": AbTestActionDataCurrentExperiment,
    "AccountResponseObjectResource": AccountResponseObjectResource,
    "AccountResponseObjectResourceAttributes": AccountResponseObjectResourceAttributes,
    "ActionOutputCondition": ActionOutputCondition,
    "ActionOutputConditionConditionGroup": ActionOutputConditionConditionGroup,
    "ActionOutputConditionFilter": ActionOutputConditionFilter,
    "ActionOutputSplitAction": ActionOutputSplitAction,
    "ActionOutputSplitActionData": ActionOutputSplitActionData,
    "AdditionalField": AdditionalField,
    "AfterCloseTimeout": AfterCloseTimeout,
    "AfterCloseTimeoutProperties": AfterCloseTimeoutProperties,
    "AgeGate": AgeGate,
    "AgeGateProperties": AgeGateProperties,
    "AgeGateStyles": AgeGateStyles,
    "AlltimeDateFilter": AlltimeDateFilter,
    "AnniversaryDateFilter": AnniversaryDateFilter,
    "AttributionResponseObjectResource": AttributionResponseObjectResource,
    "AttributionResponseObjectResourceRelationships": AttributionResponseObjectResourceRelationships,
    "AttributionResponseObjectResourceRelationshipsAttributedEvent": AttributionResponseObjectResourceRelationshipsAttributedEvent,
    "AttributionResponseObjectResourceRelationshipsAttributedEventData": AttributionResponseObjectResourceRelationshipsAttributedEventData,
    "AttributionResponseObjectResourceRelationshipsCampaign": AttributionResponseObjectResourceRelationshipsCampaign,
    "AttributionResponseObjectResourceRelationshipsCampaignData": AttributionResponseObjectResourceRelationshipsCampaignData,
    "AttributionResponseObjectResourceRelationshipsCampaignMessage": AttributionResponseObjectResourceRelationshipsCampaignMessage,
    "AttributionResponseObjectResourceRelationshipsCampaignMessageData": AttributionResponseObjectResourceRelationshipsCampaignMessageData,
    "AttributionResponseObjectResourceRelationshipsEvent": AttributionResponseObjectResourceRelationshipsEvent,
    "AttributionResponseObjectResourceRelationshipsEventData": AttributionResponseObjectResourceRelationshipsEventData,
    "AttributionResponseObjectResourceRelationshipsFlow": AttributionResponseObjectResourceRelationshipsFlow,
    "AttributionResponseObjectResourceRelationshipsFlowData": AttributionResponseObjectResourceRelationshipsFlowData,
    "AttributionResponseObjectResourceRelationshipsFlowMessage": AttributionResponseObjectResourceRelationshipsFlowMessage,
    "AttributionResponseObjectResourceRelationshipsFlowMessageData": AttributionResponseObjectResourceRelationshipsFlowMessageData,
    "AttributionResponseObjectResourceRelationshipsFlowMessageVariation": AttributionResponseObjectResourceRelationshipsFlowMessageVariation,
    "AttributionResponseObjectResourceRelationshipsFlowMessageVariationData": AttributionResponseObjectResourceRelationshipsFlowMessageVariationData,
    "Audiences": Audiences,
    "AudiencesUpdate": AudiencesUpdate,
    "AutomaticWinnerSelectionSettings": AutomaticWinnerSelectionSettings,
    "BackInStock": BackInStock,
    "BackInStockDelayAction": BackInStockDelayAction,
    "BackInStockDynamicButtonBorderStyles": BackInStockDynamicButtonBorderStyles,
    "BackInStockDynamicButtonData": BackInStockDynamicButtonData,
    "BackInStockDynamicButtonDropShadowStyles": BackInStockDynamicButtonDropShadowStyles,
    "BackInStockDynamicButtonStyles": BackInStockDynamicButtonStyles,
    "BackInStockDynamicButtonTextStyles": BackInStockDynamicButtonTextStyles,
    "BackInStockEmailConsentCheckbox": BackInStockEmailConsentCheckbox,
    "BackInStockEmailConsentCheckboxProperties": BackInStockEmailConsentCheckboxProperties,
    "BackInStockEmailConsentCheckboxStyles": BackInStockEmailConsentCheckboxStyles,
    "BackInStockMethodFilter": BackInStockMethodFilter,
    "BackInStockProperties": BackInStockProperties,
    "BackgroundImage": BackgroundImage,
    "BackgroundImageStyles": BackgroundImageStyles,
    "BannerStyles": BannerStyles,
    "BaseEventCreateQueryBulkEntryResourceObject": BaseEventCreateQueryBulkEntryResourceObject,
    "BaseEventCreateQueryBulkEntryResourceObjectAttributes": BaseEventCreateQueryBulkEntryResourceObjectAttributes,
    "BaseStyle": BaseStyle,
    "BaseStyleProperties": BaseStyleProperties,
    "BaseStyleStyles": BaseStyleStyles,
    "BlockDisplayOptions": BlockDisplayOptions,
    "Body": Body,
    "BodyProperties": BodyProperties,
    "BodyStyles": BodyStyles,
    "BooleanBranchLinks": BooleanBranchLinks,
    "BooleanFilter": BooleanFilter,
    "BorderStyle": BorderStyle,
    "BounceDateFilter": BounceDateFilter,
    "BulkProfileSuppressionsCreateJobResponseObjectResource": BulkProfileSuppressionsCreateJobResponseObjectResource,
    "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes": BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes,
    "BulkProfileSuppressionsRemoveJobResponseObjectResource": BulkProfileSuppressionsRemoveJobResponseObjectResource,
    "BulkRemoveMethodFilter": BulkRemoveMethodFilter,
    "Button": Button,
    "ButtonBlockData": ButtonBlockData,
    "ButtonBlockProperties": ButtonBlockProperties,
    "ButtonBlockStyles": ButtonBlockStyles,
    "ButtonBlockV0": ButtonBlockV0,
    "ButtonBlockV1": ButtonBlockV1,
    "ButtonDropShadowStyles": ButtonDropShadowStyles,
    "ButtonProperties": ButtonProperties,
    "ButtonStyles": ButtonStyles,
    "CalendarDateFilter": CalendarDateFilter,
    "CampaignCloneQuery": CampaignCloneQuery,
    "CampaignCloneQueryResourceObject": CampaignCloneQueryResourceObject,
    "CampaignCloneQueryResourceObjectAttributes": CampaignCloneQueryResourceObjectAttributes,
    "CampaignCreateQuery": CampaignCreateQuery,
    "CampaignCreateQueryResourceObject": CampaignCreateQueryResourceObject,
    "CampaignCreateQueryResourceObjectAttributes": CampaignCreateQueryResourceObjectAttributes,
    "CampaignCreateQueryResourceObjectAttributesCampaignMessages": CampaignCreateQueryResourceObjectAttributesCampaignMessages,
    "CampaignMessageAssignTemplateQuery": CampaignMessageAssignTemplateQuery,
    "CampaignMessageAssignTemplateQueryResourceObject": CampaignMessageAssignTemplateQueryResourceObject,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationships": CampaignMessageAssignTemplateQueryResourceObjectRelationships,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate,
    "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData": CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData,
    "CampaignMessageCreateQueryResourceObject": CampaignMessageCreateQueryResourceObject,
    "CampaignMessageCreateQueryResourceObjectAttributes": CampaignMessageCreateQueryResourceObjectAttributes,
    "CampaignMessageCreateQueryResourceObjectRelationships": CampaignMessageCreateQueryResourceObjectRelationships,
    "CampaignMessageCreateQueryResourceObjectRelationshipsImage": CampaignMessageCreateQueryResourceObjectRelationshipsImage,
    "CampaignMessageCreateQueryResourceObjectRelationshipsImageData": CampaignMessageCreateQueryResourceObjectRelationshipsImageData,
    "CampaignMessageImageUpdateQuery": CampaignMessageImageUpdateQuery,
    "CampaignMessageImageUpdateQueryData": CampaignMessageImageUpdateQueryData,
    "CampaignMessageIncrement": CampaignMessageIncrement,
    "CampaignMessagePartialUpdateQuery": CampaignMessagePartialUpdateQuery,
    "CampaignMessagePartialUpdateQueryResourceObject": CampaignMessagePartialUpdateQueryResourceObject,
    "CampaignMessagePartialUpdateQueryResourceObjectAttributes": CampaignMessagePartialUpdateQueryResourceObjectAttributes,
    "CampaignMessageProperty": CampaignMessageProperty,
    "CampaignMessageResponseObjectResource": CampaignMessageResponseObjectResource,
    "CampaignMessageResponseObjectResourceAttributes": CampaignMessageResponseObjectResourceAttributes,
    "CampaignMessageStaticCount": CampaignMessageStaticCount,
    "CampaignPartialUpdateQuery": CampaignPartialUpdateQuery,
    "CampaignPartialUpdateQueryResourceObject": CampaignPartialUpdateQueryResourceObject,
    "CampaignPartialUpdateQueryResourceObjectAttributes": CampaignPartialUpdateQueryResourceObjectAttributes,
    "CampaignRecipientEstimationJobCreateQuery": CampaignRecipientEstimationJobCreateQuery,
    "CampaignRecipientEstimationJobCreateQueryResourceObject": CampaignRecipientEstimationJobCreateQueryResourceObject,
    "CampaignRecipientEstimationJobResponseObjectResource": CampaignRecipientEstimationJobResponseObjectResource,
    "CampaignRecipientEstimationJobResponseObjectResourceAttributes": CampaignRecipientEstimationJobResponseObjectResourceAttributes,
    "CampaignRecipientEstimationResponseObjectResource": CampaignRecipientEstimationResponseObjectResource,
    "CampaignRecipientEstimationResponseObjectResourceAttributes": CampaignRecipientEstimationResponseObjectResourceAttributes,
    "CampaignResponseObjectResource": CampaignResponseObjectResource,
    "CampaignResponseObjectResourceAttributes": CampaignResponseObjectResourceAttributes,
    "CampaignSendJobCreateQuery": CampaignSendJobCreateQuery,
    "CampaignSendJobCreateQueryResourceObject": CampaignSendJobCreateQueryResourceObject,
    "CampaignSendJobPartialUpdateQuery": CampaignSendJobPartialUpdateQuery,
    "CampaignSendJobPartialUpdateQueryResourceObject": CampaignSendJobPartialUpdateQueryResourceObject,
    "CampaignSendJobPartialUpdateQueryResourceObjectAttributes": CampaignSendJobPartialUpdateQueryResourceObjectAttributes,
    "CampaignSendJobResponseObjectResource": CampaignSendJobResponseObjectResource,
    "CampaignSendJobResponseObjectResourceAttributes": CampaignSendJobResponseObjectResourceAttributes,
    "CampaignTrackingSettingDynamicParam": CampaignTrackingSettingDynamicParam,
    "CampaignTrackingSettingStaticParam": CampaignTrackingSettingStaticParam,
    "CampaignValuesRequestDTO": CampaignValuesRequestDTO,
    "CampaignValuesRequestDTOResourceObject": CampaignValuesRequestDTOResourceObject,
    "CampaignValuesRequestDTOResourceObjectAttributes": CampaignValuesRequestDTOResourceObjectAttributes,
    "CampaignsEmailTrackingOptions": CampaignsEmailTrackingOptions,
    "CampaignsSMSTrackingOptions": CampaignsSMSTrackingOptions,
    "CarrierDeactivationMethodFilter": CarrierDeactivationMethodFilter,
    "CartItemCount": CartItemCount,
    "CartItemCountProperties": CartItemCountProperties,
    "CartProduct": CartProduct,
    "CartProductProperties": CartProductProperties,
    "CartValue": CartValue,
    "CartValueProperties": CartValueProperties,
    "CatalogCategoryCreateJobCreateQuery": CatalogCategoryCreateJobCreateQuery,
    "CatalogCategoryCreateJobCreateQueryResourceObject": CatalogCategoryCreateJobCreateQueryResourceObject,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributes": CatalogCategoryCreateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryCreateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryCreateJobResponseObjectResource": CatalogCategoryCreateJobResponseObjectResource,
    "CatalogCategoryCreateQuery": CatalogCategoryCreateQuery,
    "CatalogCategoryCreateQueryResourceObject": CatalogCategoryCreateQueryResourceObject,
    "CatalogCategoryCreateQueryResourceObjectAttributes": CatalogCategoryCreateQueryResourceObjectAttributes,
    "CatalogCategoryCreateQueryResourceObjectRelationships": CatalogCategoryCreateQueryResourceObjectRelationships,
    "CatalogCategoryCreateQueryResourceObjectRelationshipsItems": CatalogCategoryCreateQueryResourceObjectRelationshipsItems,
    "CatalogCategoryDeleteJobCreateQuery": CatalogCategoryDeleteJobCreateQuery,
    "CatalogCategoryDeleteJobCreateQueryResourceObject": CatalogCategoryDeleteJobCreateQueryResourceObject,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryDeleteJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryDeleteJobResponseObjectResource": CatalogCategoryDeleteJobResponseObjectResource,
    "CatalogCategoryDeleteQueryResourceObject": CatalogCategoryDeleteQueryResourceObject,
    "CatalogCategoryItemOp": CatalogCategoryItemOp,
    "CatalogCategoryItemOpDataInner": CatalogCategoryItemOpDataInner,
    "CatalogCategoryResponseObjectResource": CatalogCategoryResponseObjectResource,
    "CatalogCategoryResponseObjectResourceAttributes": CatalogCategoryResponseObjectResourceAttributes,
    "CatalogCategoryUpdateJobCreateQuery": CatalogCategoryUpdateJobCreateQuery,
    "CatalogCategoryUpdateJobCreateQueryResourceObject": CatalogCategoryUpdateJobCreateQueryResourceObject,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories": CatalogCategoryUpdateJobCreateQueryResourceObjectAttributesCategories,
    "CatalogCategoryUpdateJobResponseObjectResource": CatalogCategoryUpdateJobResponseObjectResource,
    "CatalogCategoryUpdateQuery": CatalogCategoryUpdateQuery,
    "CatalogCategoryUpdateQueryResourceObject": CatalogCategoryUpdateQueryResourceObject,
    "CatalogCategoryUpdateQueryResourceObjectAttributes": CatalogCategoryUpdateQueryResourceObjectAttributes,
    "CatalogItemCategoryOp": CatalogItemCategoryOp,
    "CatalogItemCreateJobCreateQuery": CatalogItemCreateJobCreateQuery,
    "CatalogItemCreateJobCreateQueryResourceObject": CatalogItemCreateJobCreateQueryResourceObject,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributes": CatalogItemCreateJobCreateQueryResourceObjectAttributes,
    "CatalogItemCreateJobCreateQueryResourceObjectAttributesItems": CatalogItemCreateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemCreateJobResponseObjectResource": CatalogItemCreateJobResponseObjectResource,
    "CatalogItemCreateQuery": CatalogItemCreateQuery,
    "CatalogItemCreateQueryResourceObject": CatalogItemCreateQueryResourceObject,
    "CatalogItemCreateQueryResourceObjectAttributes": CatalogItemCreateQueryResourceObjectAttributes,
    "CatalogItemCreateQueryResourceObjectRelationships": CatalogItemCreateQueryResourceObjectRelationships,
    "CatalogItemCreateQueryResourceObjectRelationshipsCategories": CatalogItemCreateQueryResourceObjectRelationshipsCategories,
    "CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner": CatalogItemCreateQueryResourceObjectRelationshipsCategoriesDataInner,
    "CatalogItemDeleteJobCreateQuery": CatalogItemDeleteJobCreateQuery,
    "CatalogItemDeleteJobCreateQueryResourceObject": CatalogItemDeleteJobCreateQueryResourceObject,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributes": CatalogItemDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems": CatalogItemDeleteJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemDeleteJobResponseObjectResource": CatalogItemDeleteJobResponseObjectResource,
    "CatalogItemDeleteQueryResourceObject": CatalogItemDeleteQueryResourceObject,
    "CatalogItemResponseObjectResource": CatalogItemResponseObjectResource,
    "CatalogItemResponseObjectResourceAttributes": CatalogItemResponseObjectResourceAttributes,
    "CatalogItemUpdateJobCreateQuery": CatalogItemUpdateJobCreateQuery,
    "CatalogItemUpdateJobCreateQueryResourceObject": CatalogItemUpdateJobCreateQueryResourceObject,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributes": CatalogItemUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems": CatalogItemUpdateJobCreateQueryResourceObjectAttributesItems,
    "CatalogItemUpdateJobResponseObjectResource": CatalogItemUpdateJobResponseObjectResource,
    "CatalogItemUpdateQuery": CatalogItemUpdateQuery,
    "CatalogItemUpdateQueryResourceObject": CatalogItemUpdateQueryResourceObject,
    "CatalogItemUpdateQueryResourceObjectAttributes": CatalogItemUpdateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQuery": CatalogVariantCreateJobCreateQuery,
    "CatalogVariantCreateJobCreateQueryResourceObject": CatalogVariantCreateJobCreateQueryResourceObject,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributes": CatalogVariantCreateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantCreateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantCreateJobResponseObjectResource": CatalogVariantCreateJobResponseObjectResource,
    "CatalogVariantCreateQuery": CatalogVariantCreateQuery,
    "CatalogVariantCreateQueryResourceObject": CatalogVariantCreateQueryResourceObject,
    "CatalogVariantCreateQueryResourceObjectAttributes": CatalogVariantCreateQueryResourceObjectAttributes,
    "CatalogVariantCreateQueryResourceObjectRelationships": CatalogVariantCreateQueryResourceObjectRelationships,
    "CatalogVariantCreateQueryResourceObjectRelationshipsItem": CatalogVariantCreateQueryResourceObjectRelationshipsItem,
    "CatalogVariantCreateQueryResourceObjectRelationshipsItemData": CatalogVariantCreateQueryResourceObjectRelationshipsItemData,
    "CatalogVariantDeleteJobCreateQuery": CatalogVariantDeleteJobCreateQuery,
    "CatalogVariantDeleteJobCreateQueryResourceObject": CatalogVariantDeleteJobCreateQueryResourceObject,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributes": CatalogVariantDeleteJobCreateQueryResourceObjectAttributes,
    "CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants": CatalogVariantDeleteJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantDeleteJobResponseObjectResource": CatalogVariantDeleteJobResponseObjectResource,
    "CatalogVariantDeleteQueryResourceObject": CatalogVariantDeleteQueryResourceObject,
    "CatalogVariantResponseObjectResource": CatalogVariantResponseObjectResource,
    "CatalogVariantResponseObjectResourceAttributes": CatalogVariantResponseObjectResourceAttributes,
    "CatalogVariantUpdateJobCreateQuery": CatalogVariantUpdateJobCreateQuery,
    "CatalogVariantUpdateJobCreateQueryResourceObject": CatalogVariantUpdateJobCreateQueryResourceObject,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributes": CatalogVariantUpdateJobCreateQueryResourceObjectAttributes,
    "CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants": CatalogVariantUpdateJobCreateQueryResourceObjectAttributesVariants,
    "CatalogVariantUpdateJobResponseObjectResource": CatalogVariantUpdateJobResponseObjectResource,
    "CatalogVariantUpdateQuery": CatalogVariantUpdateQuery,
    "CatalogVariantUpdateQueryResourceObject": CatalogVariantUpdateQueryResourceObject,
    "CatalogVariantUpdateQueryResourceObjectAttributes": CatalogVariantUpdateQueryResourceObjectAttributes,
    "Channel": Channel,
    "ChannelProperties": ChannelProperties,
    "ChannelSettings": ChannelSettings,
    "Checkboxes": Checkboxes,
    "CheckboxesProperties": CheckboxesProperties,
    "CheckboxesStyles": CheckboxesStyles,
    "CheckoutMethodFilter": CheckoutMethodFilter,
    "Close": Close,
    "CloseButtonStyle": CloseButtonStyle,
    "CloseProperties": CloseProperties,
    "CodeAction": CodeAction,
    "CollectionLinks": CollectionLinks,
    "ColumnStyles": ColumnStyles,
    "ColumnV0": ColumnV0,
    "ColumnV1": ColumnV1,
    "ConditionGroup": ConditionGroup,
    "ConditionalBranchAction": ConditionalBranchAction,
    "ConditionalBranchActionData": ConditionalBranchActionData,
    "ConditionalBranchActionDataProfileFilter": ConditionalBranchActionDataProfileFilter,
    "ConditionalBranchActionDataProfileFilterConditionGroupsInner": ConditionalBranchActionDataProfileFilterConditionGroupsInner,
    "ConstantContactIntegrationFilter": ConstantContactIntegrationFilter,
    "ConstantContactIntegrationMethodFilter": ConstantContactIntegrationMethodFilter,
    "ContactInformation": ContactInformation,
    "ContentExperimentAction": ContentExperimentAction,
    "ContentRepeatV0": ContentRepeatV0,
    "ContentRepeatV1": ContentRepeatV1,
    "ConversationMessageCreateQuery": ConversationMessageCreateQuery,
    "ConversationMessageCreateQueryResourceObject": ConversationMessageCreateQueryResourceObject,
    "ConversationMessageCreateQueryResourceObjectAttributes": ConversationMessageCreateQueryResourceObjectAttributes,
    "ConversationMessageCreateQueryResourceObjectRelationships": ConversationMessageCreateQueryResourceObjectRelationships,
    "ConversationMessageCreateQueryResourceObjectRelationshipsConversation": ConversationMessageCreateQueryResourceObjectRelationshipsConversation,
    "ConversationMessageCreateQueryResourceObjectRelationshipsConversationData": ConversationMessageCreateQueryResourceObjectRelationshipsConversationData,
    "ConversationResponseObjectResource": ConversationResponseObjectResource,
    "CountdownDelayAction": CountdownDelayAction,
    "CountdownDelayActionData": CountdownDelayActionData,
    "CountdownTimer": CountdownTimer,
    "CountdownTimerProperties": CountdownTimerProperties,
    "CountdownTimerStyles": CountdownTimerStyles,
    "Coupon": Coupon,
    "CouponBlockData": CouponBlockData,
    "CouponBlockProperties": CouponBlockProperties,
    "CouponBlockStyles": CouponBlockStyles,
    "CouponBlockV0": CouponBlockV0,
    "CouponBlockV1": CouponBlockV1,
    "CouponCodeCreateJobCreateQuery": CouponCodeCreateJobCreateQuery,
    "CouponCodeCreateJobCreateQueryResourceObject": CouponCodeCreateJobCreateQueryResourceObject,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributes": CouponCodeCreateJobCreateQueryResourceObjectAttributes,
    "CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes": CouponCodeCreateJobCreateQueryResourceObjectAttributesCouponCodes,
    "CouponCodeCreateJobResponseObjectResource": CouponCodeCreateJobResponseObjectResource,
    "CouponCodeCreateJobResponseObjectResourceAttributes": CouponCodeCreateJobResponseObjectResourceAttributes,
    "CouponCodeCreateQuery": CouponCodeCreateQuery,
    "CouponCodeCreateQueryResourceObject": CouponCodeCreateQueryResourceObject,
    "CouponCodeCreateQueryResourceObjectAttributes": CouponCodeCreateQueryResourceObjectAttributes,
    "CouponCodeCreateQueryResourceObjectRelationships": CouponCodeCreateQueryResourceObjectRelationships,
    "CouponCodeCreateQueryResourceObjectRelationshipsCoupon": CouponCodeCreateQueryResourceObjectRelationshipsCoupon,
    "CouponCodeResponseObjectResource": CouponCodeResponseObjectResource,
    "CouponCodeResponseObjectResourceAttributes": CouponCodeResponseObjectResourceAttributes,
    "CouponCodeUpdateQuery": CouponCodeUpdateQuery,
    "CouponCodeUpdateQueryResourceObject": CouponCodeUpdateQueryResourceObject,
    "CouponCodeUpdateQueryResourceObjectAttributes": CouponCodeUpdateQueryResourceObjectAttributes,
    "CouponCreateQuery": CouponCreateQuery,
    "CouponCreateQueryResourceObject": CouponCreateQueryResourceObject,
    "CouponProperties": CouponProperties,
    "CouponResponseObjectResource": CouponResponseObjectResource,
    "CouponResponseObjectResourceAttributes": CouponResponseObjectResourceAttributes,
    "CouponStyles": CouponStyles,
    "CouponUpdateQuery": CouponUpdateQuery,
    "CouponUpdateQueryResourceObject": CouponUpdateQueryResourceObject,
    "CouponUpdateQueryResourceObjectAttributes": CouponUpdateQueryResourceObjectAttributes,
    "CustomJavascript": CustomJavascript,
    "CustomMetricCondition": CustomMetricCondition,
    "CustomMetricCreateQuery": CustomMetricCreateQuery,
    "CustomMetricCreateQueryResourceObject": CustomMetricCreateQueryResourceObject,
    "CustomMetricCreateQueryResourceObjectAttributes": CustomMetricCreateQueryResourceObjectAttributes,
    "CustomMetricDefinition": CustomMetricDefinition,
    "CustomMetricGroup": CustomMetricGroup,
    "CustomMetricPartialUpdateQuery": CustomMetricPartialUpdateQuery,
    "CustomMetricPartialUpdateQueryResourceObject": CustomMetricPartialUpdateQueryResourceObject,
    "CustomMetricPartialUpdateQueryResourceObjectAttributes": CustomMetricPartialUpdateQueryResourceObjectAttributes,
    "CustomMetricResponseObjectResource": CustomMetricResponseObjectResource,
    "CustomMetricResponseObjectResourceAttributes": CustomMetricResponseObjectResourceAttributes,
    "CustomObjectPropertyCondition": CustomObjectPropertyCondition,
    "CustomObjectTriggerCondition": CustomObjectTriggerCondition,
    "CustomSourceFilter": CustomSourceFilter,
    "CustomTimeframe": CustomTimeframe,
    "CustomTrackingParamDTO": CustomTrackingParamDTO,
    "DataPrivacyCreateDeletionJobQuery": DataPrivacyCreateDeletionJobQuery,
    "DataPrivacyCreateDeletionJobQueryResourceObject": DataPrivacyCreateDeletionJobQueryResourceObject,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes": DataPrivacyCreateDeletionJobQueryResourceObjectAttributes,
    "DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile": DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile,
    "DataPrivacyProfileQueryResourceObject": DataPrivacyProfileQueryResourceObject,
    "DataPrivacyProfileQueryResourceObjectAttributes": DataPrivacyProfileQueryResourceObjectAttributes,
    "DataSourceCreateQuery": DataSourceCreateQuery,
    "DataSourceCreateQueryResourceObject": DataSourceCreateQueryResourceObject,
    "DataSourceCreateQueryResourceObjectAttributes": DataSourceCreateQueryResourceObjectAttributes,
    "DataSourceRecordBulkCreateJobCreateQuery": DataSourceRecordBulkCreateJobCreateQuery,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObject": DataSourceRecordBulkCreateJobCreateQueryResourceObject,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes": DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributes,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords": DataSourceRecordBulkCreateJobCreateQueryResourceObjectAttributesDataSourceRecords,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationships,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSource,
    "DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData": DataSourceRecordBulkCreateJobCreateQueryResourceObjectRelationshipsDataSourceData,
    "DataSourceRecordCreateJobCreateQuery": DataSourceRecordCreateJobCreateQuery,
    "DataSourceRecordCreateJobCreateQueryResourceObject": DataSourceRecordCreateJobCreateQueryResourceObject,
    "DataSourceRecordCreateJobCreateQueryResourceObjectAttributes": DataSourceRecordCreateJobCreateQueryResourceObjectAttributes,
    "DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord": DataSourceRecordCreateJobCreateQueryResourceObjectAttributesDataSourceRecord,
    "DataSourceRecordResourceObject": DataSourceRecordResourceObject,
    "DataSourceRecordResourceObjectAttributes": DataSourceRecordResourceObjectAttributes,
    "DataSourceResponseObjectResource": DataSourceResponseObjectResource,
    "DataSourceResponseObjectResourceAttributes": DataSourceResponseObjectResourceAttributes,
    "DataWarehouseImportMethodFilter": DataWarehouseImportMethodFilter,
    "DateProperties": DateProperties,
    "DateStyles": DateStyles,
    "Delay": Delay,
    "DelayProperties": DelayProperties,
    "DeleteTagGroupResponse": DeleteTagGroupResponse,
    "Device": Device,
    "DeviceMetadata": DeviceMetadata,
    "DeviceProperties": DeviceProperties,
    "DisplayOptions": DisplayOptions,
    "DoubleOptinFilter": DoubleOptinFilter,
    "DropShadow": DropShadow,
    "DropShadowBlockData": DropShadowBlockData,
    "DropShadowBlockStyles": DropShadowBlockStyles,
    "DropShadowBlockV0": DropShadowBlockV0,
    "DropShadowBlockV1": DropShadowBlockV1,
    "Dropdown": Dropdown,
    "DropdownProperties": DropdownProperties,
    "DropdownStyles": DropdownStyles,
    "DynamicButton": DynamicButton,
    "DynamicImageBlockProperties": DynamicImageBlockProperties,
    "DynamicProductBlockProperties": DynamicProductBlockProperties,
    "DynamicReviewBlockProperties": DynamicReviewBlockProperties,
    "DynamicTableBlockProperties": DynamicTableBlockProperties,
    "DynamicTrackingParam": DynamicTrackingParam,
    "EffectiveDateFilter": EffectiveDateFilter,
    "Email": Email,
    "EmailChannel": EmailChannel,
    "EmailContent": EmailContent,
    "EmailContentSubObject": EmailContentSubObject,
    "EmailMarketing": EmailMarketing,
    "EmailMarketingListSuppression": EmailMarketingListSuppression,
    "EmailMarketingSuppression": EmailMarketingSuppression,
    "EmailMessageDefinition": EmailMessageDefinition,
    "EmailProperties": EmailProperties,
    "EmailSendOptions": EmailSendOptions,
    "EmailStyles": EmailStyles,
    "EmailSubscriptionParameters": EmailSubscriptionParameters,
    "EmailUnsubscriptionParameters": EmailUnsubscriptionParameters,
    "EncodedFormResponseObjectResource": EncodedFormResponseObjectResource,
    "EncodedFormResponseObjectResourceAttributes": EncodedFormResponseObjectResourceAttributes,
    "EqualsStringFilter": EqualsStringFilter,
    "ErrorMessages": ErrorMessages,
    "ErrorSource": ErrorSource,
    "EventCreateQueryV2": EventCreateQueryV2,
    "EventCreateQueryV2ResourceObject": EventCreateQueryV2ResourceObject,
    "EventCreateQueryV2ResourceObjectAttributes": EventCreateQueryV2ResourceObjectAttributes,
    "EventCreateQueryV2ResourceObjectAttributesMetric": EventCreateQueryV2ResourceObjectAttributesMetric,
    "EventCreateQueryV2ResourceObjectAttributesProfile": EventCreateQueryV2ResourceObjectAttributesProfile,
    "EventProfileCreateQueryResourceObject": EventProfileCreateQueryResourceObject,
    "EventProfileCreateQueryResourceObjectAttributes": EventProfileCreateQueryResourceObjectAttributes,
    "EventResponseObjectResource": EventResponseObjectResource,
    "EventResponseObjectResourceAttributes": EventResponseObjectResourceAttributes,
    "EventsBulkCreateJob": EventsBulkCreateJob,
    "EventsBulkCreateJobResourceObject": EventsBulkCreateJobResourceObject,
    "EventsBulkCreateJobResourceObjectAttributes": EventsBulkCreateJobResourceObjectAttributes,
    "EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate": EventsBulkCreateJobResourceObjectAttributesEventsBulkCreate,
    "EventsBulkCreateQueryResourceObject": EventsBulkCreateQueryResourceObject,
    "EventsBulkCreateQueryResourceObjectAttributes": EventsBulkCreateQueryResourceObjectAttributes,
    "EventsBulkCreateQueryResourceObjectAttributesEvents": EventsBulkCreateQueryResourceObjectAttributesEvents,
    "EventsBulkCreateQueryResourceObjectAttributesProfile": EventsBulkCreateQueryResourceObjectAttributesProfile,
    "ExistenceOperatorExistenceFilter": ExistenceOperatorExistenceFilter,
    "ExitIntent": ExitIntent,
    "ExplicitlyReachable": ExplicitlyReachable,
    "ExplicitlyUnreachable": ExplicitlyUnreachable,
    "FailedAgeGateMethodFilter": FailedAgeGateMethodFilter,
    "FixedTimerConfiguration": FixedTimerConfiguration,
    "FlowActionEncodedResponseObjectResource": FlowActionEncodedResponseObjectResource,
    "FlowActionEncodedResponseObjectResourceAttributes": FlowActionEncodedResponseObjectResourceAttributes,
    "FlowActionUpdateQuery": FlowActionUpdateQuery,
    "FlowActionUpdateQueryResourceObject": FlowActionUpdateQueryResourceObject,
    "FlowActionUpdateQueryResourceObjectAttributes": FlowActionUpdateQueryResourceObjectAttributes,
    "FlowCreateQuery": FlowCreateQuery,
    "FlowCreateQueryResourceObject": FlowCreateQueryResourceObject,
    "FlowCreateQueryResourceObjectAttributes": FlowCreateQueryResourceObjectAttributes,
    "FlowDefinition": FlowDefinition,
    "FlowDefinitionProfileFilter": FlowDefinitionProfileFilter,
    "FlowDefinitionProfileFilterConditionGroupsInner": FlowDefinitionProfileFilterConditionGroupsInner,
    "FlowEmail": FlowEmail,
    "FlowEmailAdditionalFilters": FlowEmailAdditionalFilters,
    "FlowEmailAdditionalFiltersConditionGroupsInner": FlowEmailAdditionalFiltersConditionGroupsInner,
    "FlowInternalAlert": FlowInternalAlert,
    "FlowMessageEncodedResponseObjectResource": FlowMessageEncodedResponseObjectResource,
    "FlowMessageEncodedResponseObjectResourceAttributes": FlowMessageEncodedResponseObjectResourceAttributes,
    "FlowPushNotification": FlowPushNotification,
    "FlowPushNotificationAdditionalFilters": FlowPushNotificationAdditionalFilters,
    "FlowPushNotificationAdditionalFiltersConditionGroupsInner": FlowPushNotificationAdditionalFiltersConditionGroupsInner,
    "FlowResponseObjectResource": FlowResponseObjectResource,
    "FlowResponseObjectResourceAttributes": FlowResponseObjectResourceAttributes,
    "FlowSeriesRequestDTO": FlowSeriesRequestDTO,
    "FlowSeriesRequestDTOResourceObject": FlowSeriesRequestDTOResourceObject,
    "FlowSeriesRequestDTOResourceObjectAttributes": FlowSeriesRequestDTOResourceObjectAttributes,
    "FlowSms": FlowSms,
    "FlowSmsAdditionalFilters": FlowSmsAdditionalFilters,
    "FlowSmsAdditionalFiltersConditionGroupsInner": FlowSmsAdditionalFiltersConditionGroupsInner,
    "FlowTrackingSettingDynamicParam": FlowTrackingSettingDynamicParam,
    "FlowTrackingSettingStaticParam": FlowTrackingSettingStaticParam,
    "FlowUpdateQuery": FlowUpdateQuery,
    "FlowUpdateQueryResourceObject": FlowUpdateQueryResourceObject,
    "FlowUpdateQueryResourceObjectAttributes": FlowUpdateQueryResourceObjectAttributes,
    "FlowV2ResponseObjectResourceAttributes": FlowV2ResponseObjectResourceAttributes,
    "FlowV2ResponseObjectResourceExtended": FlowV2ResponseObjectResourceExtended,
    "FlowV2ResponseObjectResourceExtendedAttributes": FlowV2ResponseObjectResourceExtendedAttributes,
    "FlowValuesRequestDTO": FlowValuesRequestDTO,
    "FlowValuesRequestDTOResourceObject": FlowValuesRequestDTOResourceObject,
    "FlowValuesRequestDTOResourceObjectAttributes": FlowValuesRequestDTOResourceObjectAttributes,
    "FlowWebhook": FlowWebhook,
    "FlowWhatsApp": FlowWhatsApp,
    "FlowsProfileMetricCondition": FlowsProfileMetricCondition,
    "FormCreateQuery": FormCreateQuery,
    "FormCreateQueryResourceObject": FormCreateQueryResourceObject,
    "FormCreateQueryResourceObjectAttributes": FormCreateQueryResourceObjectAttributes,
    "FormDefinition": FormDefinition,
    "FormMethodFilter": FormMethodFilter,
    "FormResponseObjectResource": FormResponseObjectResource,
    "FormResponseObjectResourceAttributes": FormResponseObjectResourceAttributes,
    "FormSeriesRequestDTO": FormSeriesRequestDTO,
    "FormSeriesRequestDTOResourceObject": FormSeriesRequestDTOResourceObject,
    "FormSeriesRequestDTOResourceObjectAttributes": FormSeriesRequestDTOResourceObjectAttributes,
    "FormSubscribeFilter": FormSubscribeFilter,
    "FormValuesRequestDTO": FormValuesRequestDTO,
    "FormValuesRequestDTOResourceObject": FormValuesRequestDTOResourceObject,
    "FormValuesRequestDTOResourceObjectAttributes": FormValuesRequestDTOResourceObjectAttributes,
    "FormVersionABTest": FormVersionABTest,
    "FormVersionResponseObjectResource": FormVersionResponseObjectResource,
    "FormVersionResponseObjectResourceAttributes": FormVersionResponseObjectResourceAttributes,
    "GetAccountResponse": GetAccountResponse,
    "GetAccountResponseCollection": GetAccountResponseCollection,
    "GetAccounts4XXResponse": GetAccounts4XXResponse,
    "GetAccounts4XXResponseErrorsInner": GetAccounts4XXResponseErrorsInner,
    "GetAccounts4XXResponseErrorsInnerSource": GetAccounts4XXResponseErrorsInnerSource,
    "GetBulkProfileSuppressionsCreateJobResponse": GetBulkProfileSuppressionsCreateJobResponse,
    "GetBulkProfileSuppressionsCreateJobResponseCollection": GetBulkProfileSuppressionsCreateJobResponseCollection,
    "GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner": GetBulkProfileSuppressionsCreateJobResponseCollectionDataInner,
    "GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships": GetBulkProfileSuppressionsCreateJobResponseCollectionDataInnerAllOfRelationships,
    "GetBulkProfileSuppressionsRemoveJobResponse": GetBulkProfileSuppressionsRemoveJobResponse,
    "GetBulkProfileSuppressionsRemoveJobResponseCollection": GetBulkProfileSuppressionsRemoveJobResponseCollection,
    "GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner": GetBulkProfileSuppressionsRemoveJobResponseCollectionDataInner,
    "GetCampaignMessageCampaignRelationshipResponse": GetCampaignMessageCampaignRelationshipResponse,
    "GetCampaignMessageCampaignRelationshipResponseData": GetCampaignMessageCampaignRelationshipResponseData,
    "GetCampaignMessageImageRelationshipResponse": GetCampaignMessageImageRelationshipResponse,
    "GetCampaignMessageImageRelationshipResponseData": GetCampaignMessageImageRelationshipResponseData,
    "GetCampaignMessageResponseCollectionCompoundDocument": GetCampaignMessageResponseCollectionCompoundDocument,
    "GetCampaignMessageResponseCompoundDocument": GetCampaignMessageResponseCompoundDocument,
    "GetCampaignMessageResponseCompoundDocumentData": GetCampaignMessageResponseCompoundDocumentData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationships,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaign,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsCampaignData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImage,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsImageData,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplate,
    "GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData": GetCampaignMessageResponseCompoundDocumentDataAllOfRelationshipsTemplateData,
    "GetCampaignMessageTemplateRelationshipResponse": GetCampaignMessageTemplateRelationshipResponse,
    "GetCampaignMessagesRelationshipsResponseCollection": GetCampaignMessagesRelationshipsResponseCollection,
    "GetCampaignMessagesRelationshipsResponseCollectionDataInner": GetCampaignMessagesRelationshipsResponseCollectionDataInner,
    "GetCampaignRecipientEstimationJobResponse": GetCampaignRecipientEstimationJobResponse,
    "GetCampaignRecipientEstimationResponse": GetCampaignRecipientEstimationResponse,
    "GetCampaignResponse": GetCampaignResponse,
    "GetCampaignResponseCollectionCompoundDocument": GetCampaignResponseCollectionCompoundDocument,
    "GetCampaignResponseCollectionCompoundDocumentDataInner": GetCampaignResponseCollectionCompoundDocumentDataInner,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessages,
    "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner": GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCampaignMessagesDataInner,
    "GetCampaignResponseCompoundDocument": GetCampaignResponseCompoundDocument,
    "GetCampaignResponseData": GetCampaignResponseData,
    "GetCampaignResponseDataAllOfRelationships": GetCampaignResponseDataAllOfRelationships,
    "GetCampaignSendJobResponse": GetCampaignSendJobResponse,
    "GetCampaignTagsRelationshipsResponseCollection": GetCampaignTagsRelationshipsResponseCollection,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocument": GetCatalogCategoryCreateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories,
    "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner": GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner,
    "GetCatalogCategoryCreateJobResponseCompoundDocument": GetCatalogCategoryCreateJobResponseCompoundDocument,
    "GetCatalogCategoryDeleteJobResponse": GetCatalogCategoryDeleteJobResponse,
    "GetCatalogCategoryDeleteJobResponseCollection": GetCatalogCategoryDeleteJobResponseCollection,
    "GetCatalogCategoryDeleteJobResponseCollectionDataInner": GetCatalogCategoryDeleteJobResponseCollectionDataInner,
    "GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships": GetCatalogCategoryDeleteJobResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogCategoryItemsRelationshipsResponseCollection": GetCatalogCategoryItemsRelationshipsResponseCollection,
    "GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner": GetCatalogCategoryItemsRelationshipsResponseCollectionDataInner,
    "GetCatalogCategoryResponse": GetCatalogCategoryResponse,
    "GetCatalogCategoryResponseCollection": GetCatalogCategoryResponseCollection,
    "GetCatalogCategoryResponseCollectionDataInner": GetCatalogCategoryResponseCollectionDataInner,
    "GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships": GetCatalogCategoryResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategories,
    "GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner": GetCatalogCategoryUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner,
    "GetCatalogCategoryUpdateJobResponseCompoundDocument": GetCatalogCategoryUpdateJobResponseCompoundDocument,
    "GetCatalogItemCategoriesRelationshipsResponseCollection": GetCatalogItemCategoriesRelationshipsResponseCollection,
    "GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner": GetCatalogItemCategoriesRelationshipsResponseCollectionDataInner,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocument": GetCatalogItemCreateJobResponseCollectionCompoundDocument,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems,
    "GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner": GetCatalogItemCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner,
    "GetCatalogItemCreateJobResponseCompoundDocument": GetCatalogItemCreateJobResponseCompoundDocument,
    "GetCatalogItemDeleteJobResponse": GetCatalogItemDeleteJobResponse,
    "GetCatalogItemDeleteJobResponseCollection": GetCatalogItemDeleteJobResponseCollection,
    "GetCatalogItemDeleteJobResponseCollectionDataInner": GetCatalogItemDeleteJobResponseCollectionDataInner,
    "GetCatalogItemResponseCollectionCompoundDocument": GetCatalogItemResponseCollectionCompoundDocument,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogItemResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogItemResponseCompoundDocument": GetCatalogItemResponseCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocument": GetCatalogItemUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItems,
    "GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner": GetCatalogItemUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsItemsDataInner,
    "GetCatalogItemUpdateJobResponseCompoundDocument": GetCatalogItemUpdateJobResponseCompoundDocument,
    "GetCatalogItemVariantsRelationshipsResponseCollection": GetCatalogItemVariantsRelationshipsResponseCollection,
    "GetCatalogItemVariantsRelationshipsResponseCollectionDataInner": GetCatalogItemVariantsRelationshipsResponseCollectionDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocument": GetCatalogVariantCreateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogVariantCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogVariantCreateJobResponseCompoundDocument": GetCatalogVariantCreateJobResponseCompoundDocument,
    "GetCatalogVariantDeleteJobResponse": GetCatalogVariantDeleteJobResponse,
    "GetCatalogVariantDeleteJobResponseCollection": GetCatalogVariantDeleteJobResponseCollection,
    "GetCatalogVariantDeleteJobResponseCollectionDataInner": GetCatalogVariantDeleteJobResponseCollectionDataInner,
    "GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships": GetCatalogVariantDeleteJobResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogVariantResponse": GetCatalogVariantResponse,
    "GetCatalogVariantResponseCollection": GetCatalogVariantResponseCollection,
    "GetCatalogVariantResponseCollectionDataInner": GetCatalogVariantResponseCollectionDataInner,
    "GetCatalogVariantResponseCollectionDataInnerAllOfRelationships": GetCatalogVariantResponseCollectionDataInnerAllOfRelationships,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocument": GetCatalogVariantUpdateJobResponseCollectionCompoundDocument,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariants,
    "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner": GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsVariantsDataInner,
    "GetCatalogVariantUpdateJobResponseCompoundDocument": GetCatalogVariantUpdateJobResponseCompoundDocument,
    "GetConversationResponse": GetConversationResponse,
    "GetConversationResponseData": GetConversationResponseData,
    "GetCouponCodeCouponRelationshipResponse": GetCouponCodeCouponRelationshipResponse,
    "GetCouponCodeCouponRelationshipResponseData": GetCouponCodeCouponRelationshipResponseData,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocument": GetCouponCodeCreateJobResponseCollectionCompoundDocument,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInner,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes,
    "GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner": GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner,
    "GetCouponCodeCreateJobResponseCompoundDocument": GetCouponCodeCreateJobResponseCompoundDocument,
    "GetCouponCodeResponseCollection": GetCouponCodeResponseCollection,
    "GetCouponCodeResponseCollectionCompoundDocument": GetCouponCodeResponseCollectionCompoundDocument,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInner": GetCouponCodeResponseCollectionCompoundDocumentDataInner,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCoupon,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponData,
    "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetCouponCodeResponseCollectionDataInner": GetCouponCodeResponseCollectionDataInner,
    "GetCouponCodeResponseCollectionDataInnerAllOfRelationships": GetCouponCodeResponseCollectionDataInnerAllOfRelationships,
    "GetCouponCodeResponseCompoundDocument": GetCouponCodeResponseCompoundDocument,
    "GetCouponCodesRelationshipsResponseCollection": GetCouponCodesRelationshipsResponseCollection,
    "GetCouponCodesRelationshipsResponseCollectionDataInner": GetCouponCodesRelationshipsResponseCollectionDataInner,
    "GetCouponResponse": GetCouponResponse,
    "GetCouponResponseCollection": GetCouponResponseCollection,
    "GetCustomMetricMetricsRelationshipsResponseCollection": GetCustomMetricMetricsRelationshipsResponseCollection,
    "GetCustomMetricResponse": GetCustomMetricResponse,
    "GetCustomMetricResponseCollectionCompoundDocument": GetCustomMetricResponseCollectionCompoundDocument,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInner": GetCustomMetricResponseCollectionCompoundDocumentDataInner,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetrics,
    "GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner": GetCustomMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricsDataInner,
    "GetCustomMetricResponseCompoundDocument": GetCustomMetricResponseCompoundDocument,
    "GetCustomMetricResponseData": GetCustomMetricResponseData,
    "GetCustomMetricResponseDataAllOfRelationships": GetCustomMetricResponseDataAllOfRelationships,
    "GetDataSourceResponse": GetDataSourceResponse,
    "GetDataSourceResponseCollection": GetDataSourceResponseCollection,
    "GetEncodedFormResponse": GetEncodedFormResponse,
    "GetEventMetricRelationshipResponse": GetEventMetricRelationshipResponse,
    "GetEventProfileRelationshipResponse": GetEventProfileRelationshipResponse,
    "GetEventProfileRelationshipResponseData": GetEventProfileRelationshipResponseData,
    "GetEventResponseCollectionCompoundDocument": GetEventResponseCollectionCompoundDocument,
    "GetEventResponseCollectionCompoundDocumentDataInner": GetEventResponseCollectionCompoundDocumentDataInner,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributionsDataInner,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData": GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData,
    "GetEventResponseCompoundDocument": GetEventResponseCompoundDocument,
    "GetFlowActionEncodedResponse": GetFlowActionEncodedResponse,
    "GetFlowActionEncodedResponseCollection": GetFlowActionEncodedResponseCollection,
    "GetFlowActionEncodedResponseCollectionDataInner": GetFlowActionEncodedResponseCollectionDataInner,
    "GetFlowActionEncodedResponseCollectionDataInnerAllOfRelationships": GetFlowActionEncodedResponseCollectionDataInnerAllOfRelationships,
    "GetFlowActionEncodedResponseCompoundDocument": GetFlowActionEncodedResponseCompoundDocument,
    "GetFlowActionEncodedResponseCompoundDocumentData": GetFlowActionEncodedResponseCompoundDocumentData,
    "GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships": GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationships,
    "GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow": GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlow,
    "GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages": GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessages,
    "GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner": GetFlowActionEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowMessagesDataInner,
    "GetFlowActionFlowMessageRelationshipResponseCollection": GetFlowActionFlowMessageRelationshipResponseCollection,
    "GetFlowActionFlowRelationshipResponse": GetFlowActionFlowRelationshipResponse,
    "GetFlowFlowActionRelationshipListResponseCollection": GetFlowFlowActionRelationshipListResponseCollection,
    "GetFlowMessageActionRelationshipResponse": GetFlowMessageActionRelationshipResponse,
    "GetFlowMessageEncodedResponseCollection": GetFlowMessageEncodedResponseCollection,
    "GetFlowMessageEncodedResponseCollectionDataInner": GetFlowMessageEncodedResponseCollectionDataInner,
    "GetFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships": GetFlowMessageEncodedResponseCollectionDataInnerAllOfRelationships,
    "GetFlowMessageEncodedResponseCompoundDocument": GetFlowMessageEncodedResponseCompoundDocument,
    "GetFlowMessageEncodedResponseCompoundDocumentData": GetFlowMessageEncodedResponseCompoundDocumentData,
    "GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships": GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationships,
    "GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction": GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsFlowAction,
    "GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate": GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplate,
    "GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData": GetFlowMessageEncodedResponseCompoundDocumentDataAllOfRelationshipsTemplateData,
    "GetFlowMessageTemplateRelationshipResponse": GetFlowMessageTemplateRelationshipResponse,
    "GetFlowMessageTemplateRelationshipResponseData": GetFlowMessageTemplateRelationshipResponseData,
    "GetFlowResponse": GetFlowResponse,
    "GetFlowResponseCollection": GetFlowResponseCollection,
    "GetFlowResponseCollectionCompoundDocument": GetFlowResponseCollectionCompoundDocument,
    "GetFlowResponseCollectionCompoundDocumentDataInner": GetFlowResponseCollectionCompoundDocumentDataInner,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActions,
    "GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner": GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner,
    "GetFlowResponseCollectionDataInner": GetFlowResponseCollectionDataInner,
    "GetFlowResponseCollectionDataInnerAllOfRelationships": GetFlowResponseCollectionDataInnerAllOfRelationships,
    "GetFlowTagsRelationshipsResponseCollection": GetFlowTagsRelationshipsResponseCollection,
    "GetFlowV2ResponseCompoundDocument": GetFlowV2ResponseCompoundDocument,
    "GetFlowV2ResponseCompoundDocumentData": GetFlowV2ResponseCompoundDocumentData,
    "GetFormResponse": GetFormResponse,
    "GetFormResponseCollection": GetFormResponseCollection,
    "GetFormResponseCollectionDataInner": GetFormResponseCollectionDataInner,
    "GetFormResponseCollectionDataInnerAllOfRelationships": GetFormResponseCollectionDataInnerAllOfRelationships,
    "GetFormVersionFormRelationshipResponse": GetFormVersionFormRelationshipResponse,
    "GetFormVersionFormRelationshipResponseData": GetFormVersionFormRelationshipResponseData,
    "GetFormVersionResponse": GetFormVersionResponse,
    "GetFormVersionResponseCollection": GetFormVersionResponseCollection,
    "GetFormVersionsRelationshipsResponseCollection": GetFormVersionsRelationshipsResponseCollection,
    "GetFormVersionsRelationshipsResponseCollectionDataInner": GetFormVersionsRelationshipsResponseCollectionDataInner,
    "GetImageResponse": GetImageResponse,
    "GetImageResponseCollection": GetImageResponseCollection,
    "GetImportErrorResponseCollection": GetImportErrorResponseCollection,
    "GetListFlowTriggersRelationshipsResponseCollection": GetListFlowTriggersRelationshipsResponseCollection,
    "GetListListResponseCollectionCompoundDocument": GetListListResponseCollectionCompoundDocument,
    "GetListListResponseCollectionCompoundDocumentDataInner": GetListListResponseCollectionCompoundDocumentDataInner,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTags,
    "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner": GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagsDataInner,
    "GetListMemberResponseCollection": GetListMemberResponseCollection,
    "GetListMemberResponseCollectionDataInner": GetListMemberResponseCollectionDataInner,
    "GetListProfilesRelationshipsResponseCollection": GetListProfilesRelationshipsResponseCollection,
    "GetListResponseCollection": GetListResponseCollection,
    "GetListResponseCollectionDataInner": GetListResponseCollectionDataInner,
    "GetListResponseCollectionDataInnerAllOfRelationships": GetListResponseCollectionDataInnerAllOfRelationships,
    "GetListRetrieveResponseCompoundDocument": GetListRetrieveResponseCompoundDocument,
    "GetListRetrieveResponseCompoundDocumentData": GetListRetrieveResponseCompoundDocumentData,
    "GetListTagsRelationshipsResponseCollection": GetListTagsRelationshipsResponseCollection,
    "GetListTagsRelationshipsResponseCollectionDataInner": GetListTagsRelationshipsResponseCollectionDataInner,
    "GetMappedMetricCustomMetricRelationshipResponse": GetMappedMetricCustomMetricRelationshipResponse,
    "GetMappedMetricCustomMetricRelationshipResponseData": GetMappedMetricCustomMetricRelationshipResponseData,
    "GetMappedMetricMetricRelationshipResponse": GetMappedMetricMetricRelationshipResponse,
    "GetMappedMetricResponseCollectionCompoundDocument": GetMappedMetricResponseCollectionCompoundDocument,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInner": GetMappedMetricResponseCollectionCompoundDocumentDataInner,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetric,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCustomMetricData,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric,
    "GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData": GetMappedMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData,
    "GetMappedMetricResponseCompoundDocument": GetMappedMetricResponseCompoundDocument,
    "GetMetricFlowTriggersRelationshipsResponseCollection": GetMetricFlowTriggersRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollection": GetMetricPropertiesRelationshipsResponseCollection,
    "GetMetricPropertiesRelationshipsResponseCollectionDataInner": GetMetricPropertiesRelationshipsResponseCollectionDataInner,
    "GetMetricPropertyMetricRelationshipResponse": GetMetricPropertyMetricRelationshipResponse,
    "GetMetricPropertyResponseCollection": GetMetricPropertyResponseCollection,
    "GetMetricPropertyResponseCollectionDataInner": GetMetricPropertyResponseCollectionDataInner,
    "GetMetricPropertyResponseCollectionDataInnerAllOfRelationships": GetMetricPropertyResponseCollectionDataInnerAllOfRelationships,
    "GetMetricPropertyResponseCompoundDocument": GetMetricPropertyResponseCompoundDocument,
    "GetMetricPropertyResponseCompoundDocumentData": GetMetricPropertyResponseCompoundDocumentData,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetric,
    "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData": GetMetricPropertyResponseCompoundDocumentDataAllOfRelationshipsMetricData,
    "GetMetricResponse": GetMetricResponse,
    "GetMetricResponseCollection": GetMetricResponseCollection,
    "GetMetricResponseCollectionCompoundDocument": GetMetricResponseCollectionCompoundDocument,
    "GetMetricResponseCollectionCompoundDocumentDataInner": GetMetricResponseCollectionCompoundDocumentDataInner,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggers,
    "GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner": GetMetricResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowTriggersDataInner,
    "GetMetricResponseCompoundDocument": GetMetricResponseCompoundDocument,
    "GetMetricResponseData": GetMetricResponseData,
    "GetMetricResponseDataAllOfRelationships": GetMetricResponseDataAllOfRelationships,
    "GetProfileBulkImportJobListsRelationshipsResponseCollection": GetProfileBulkImportJobListsRelationshipsResponseCollection,
    "GetProfileBulkImportJobProfilesRelationshipsResponseCollection": GetProfileBulkImportJobProfilesRelationshipsResponseCollection,
    "GetProfileConversationRelationshipResponse": GetProfileConversationRelationshipResponse,
    "GetProfileConversationRelationshipResponseData": GetProfileConversationRelationshipResponseData,
    "GetProfileImportJobResponseCollectionCompoundDocument": GetProfileImportJobResponseCollectionCompoundDocument,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInner,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsImportErrors,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsLists,
    "GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner": GetProfileImportJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsListsDataInner,
    "GetProfileImportJobResponseCompoundDocument": GetProfileImportJobResponseCompoundDocument,
    "GetProfileListsRelationshipsResponseCollection": GetProfileListsRelationshipsResponseCollection,
    "GetProfileListsRelationshipsResponseCollectionDataInner": GetProfileListsRelationshipsResponseCollectionDataInner,
    "GetProfilePushTokensRelationshipsResponseCollection": GetProfilePushTokensRelationshipsResponseCollection,
    "GetProfilePushTokensRelationshipsResponseCollectionDataInner": GetProfilePushTokensRelationshipsResponseCollectionDataInner,
    "GetProfileResponse": GetProfileResponse,
    "GetProfileResponseCollection": GetProfileResponseCollection,
    "GetProfileResponseCollectionCompoundDocument": GetProfileResponseCollectionCompoundDocument,
    "GetProfileResponseCollectionCompoundDocumentDataInner": GetProfileResponseCollectionCompoundDocumentDataInner,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokens,
    "GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner": GetProfileResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsPushTokensDataInner,
    "GetProfileResponseCompoundDocument": GetProfileResponseCompoundDocument,
    "GetProfileResponseCompoundDocumentData": GetProfileResponseCompoundDocumentData,
    "GetProfileResponseCompoundDocumentDataAllOfRelationships": GetProfileResponseCompoundDocumentDataAllOfRelationships,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists": GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsListsDataInner,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments,
    "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner": GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegmentsDataInner,
    "GetProfileResponseData": GetProfileResponseData,
    "GetProfileResponseDataAllOfRelationships": GetProfileResponseDataAllOfRelationships,
    "GetProfileSegmentsRelationshipsResponseCollection": GetProfileSegmentsRelationshipsResponseCollection,
    "GetPushTokenProfileRelationshipResponse": GetPushTokenProfileRelationshipResponse,
    "GetPushTokenResponseCollection": GetPushTokenResponseCollection,
    "GetPushTokenResponseCollectionCompoundDocument": GetPushTokenResponseCollectionCompoundDocument,
    "GetPushTokenResponseCollectionCompoundDocumentDataInner": GetPushTokenResponseCollectionCompoundDocumentDataInner,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile,
    "GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData": GetPushTokenResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData,
    "GetPushTokenResponseCollectionDataInner": GetPushTokenResponseCollectionDataInner,
    "GetPushTokenResponseCollectionDataInnerAllOfRelationships": GetPushTokenResponseCollectionDataInnerAllOfRelationships,
    "GetPushTokenResponseCompoundDocument": GetPushTokenResponseCompoundDocument,
    "GetReviewResponseDTOCollectionCompoundDocument": GetReviewResponseDTOCollectionCompoundDocument,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInner": GetReviewResponseDTOCollectionCompoundDocumentDataInner,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEvents,
    "GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner": GetReviewResponseDTOCollectionCompoundDocumentDataInnerAllOfRelationshipsEventsDataInner,
    "GetReviewResponseDTOCompoundDocument": GetReviewResponseDTOCompoundDocument,
    "GetSegmentFlowTriggersRelationshipsResponseCollection": GetSegmentFlowTriggersRelationshipsResponseCollection,
    "GetSegmentListResponseCollectionCompoundDocument": GetSegmentListResponseCollectionCompoundDocument,
    "GetSegmentListResponseCollectionCompoundDocumentDataInner": GetSegmentListResponseCollectionCompoundDocumentDataInner,
    "GetSegmentMemberResponseCollection": GetSegmentMemberResponseCollection,
    "GetSegmentMemberResponseCollectionDataInner": GetSegmentMemberResponseCollectionDataInner,
    "GetSegmentProfilesRelationshipsResponseCollection": GetSegmentProfilesRelationshipsResponseCollection,
    "GetSegmentResponseCollection": GetSegmentResponseCollection,
    "GetSegmentResponseCollectionDataInner": GetSegmentResponseCollectionDataInner,
    "GetSegmentRetrieveResponseCompoundDocument": GetSegmentRetrieveResponseCompoundDocument,
    "GetSegmentRetrieveResponseCompoundDocumentData": GetSegmentRetrieveResponseCompoundDocumentData,
    "GetSegmentTagsRelationshipsResponseCollection": GetSegmentTagsRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollection": GetTagCampaignRelationshipsResponseCollection,
    "GetTagCampaignRelationshipsResponseCollectionDataInner": GetTagCampaignRelationshipsResponseCollectionDataInner,
    "GetTagFlowRelationshipsResponseCollection": GetTagFlowRelationshipsResponseCollection,
    "GetTagFlowRelationshipsResponseCollectionDataInner": GetTagFlowRelationshipsResponseCollectionDataInner,
    "GetTagGroupRelationshipResponse": GetTagGroupRelationshipResponse,
    "GetTagGroupRelationshipResponseData": GetTagGroupRelationshipResponseData,
    "GetTagGroupResponse": GetTagGroupResponse,
    "GetTagGroupResponseCollection": GetTagGroupResponseCollection,
    "GetTagGroupResponseCollectionDataInner": GetTagGroupResponseCollectionDataInner,
    "GetTagGroupResponseCollectionDataInnerAllOfRelationships": GetTagGroupResponseCollectionDataInnerAllOfRelationships,
    "GetTagGroupTagsRelationshipsResponseCollection": GetTagGroupTagsRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollection": GetTagListRelationshipsResponseCollection,
    "GetTagListRelationshipsResponseCollectionDataInner": GetTagListRelationshipsResponseCollectionDataInner,
    "GetTagResponseCollection": GetTagResponseCollection,
    "GetTagResponseCollectionCompoundDocument": GetTagResponseCollectionCompoundDocument,
    "GetTagResponseCollectionCompoundDocumentDataInner": GetTagResponseCollectionCompoundDocumentDataInner,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroup,
    "GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData": GetTagResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsTagGroupData,
    "GetTagResponseCollectionDataInner": GetTagResponseCollectionDataInner,
    "GetTagResponseCollectionDataInnerAllOfRelationships": GetTagResponseCollectionDataInnerAllOfRelationships,
    "GetTagResponseCompoundDocument": GetTagResponseCompoundDocument,
    "GetTagSegmentRelationshipsResponseCollection": GetTagSegmentRelationshipsResponseCollection,
    "GetTagSegmentRelationshipsResponseCollectionDataInner": GetTagSegmentRelationshipsResponseCollectionDataInner,
    "GetTemplateDndResponse": GetTemplateDndResponse,
    "GetTemplateDndResponseCollection": GetTemplateDndResponseCollection,
    "GetTemplateResponse": GetTemplateResponse,
    "GetTrackingSettingResponse": GetTrackingSettingResponse,
    "GetTrackingSettingResponseCollection": GetTrackingSettingResponseCollection,
    "GetUniversalContentResponse": GetUniversalContentResponse,
    "GetUniversalContentResponseCollection": GetUniversalContentResponseCollection,
    "GetWebFeedResponse": GetWebFeedResponse,
    "GetWebFeedResponseCollection": GetWebFeedResponseCollection,
    "GetWebhookResponseCollectionCompoundDocument": GetWebhookResponseCollectionCompoundDocument,
    "GetWebhookResponseCollectionCompoundDocumentDataInner": GetWebhookResponseCollectionCompoundDocumentDataInner,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationships,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopics,
    "GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner": GetWebhookResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsWebhookTopicsDataInner,
    "GetWebhookResponseCompoundDocument": GetWebhookResponseCompoundDocument,
    "GetWebhookTopicResponse": GetWebhookTopicResponse,
    "GetWebhookTopicResponseCollection": GetWebhookTopicResponseCollection,
    "GoToInbox": GoToInbox,
    "GreaterThanPositiveNumericFilter": GreaterThanPositiveNumericFilter,
    "HTMLBlockDataV0": HTMLBlockDataV0,
    "HTMLBlockDataV1": HTMLBlockDataV1,
    "HTMLBlockV0": HTMLBlockV0,
    "HTMLBlockV1": HTMLBlockV1,
    "HTMLText": HTMLText,
    "HTMLTextProperties": HTMLTextProperties,
    "HTMLTextStyles": HTMLTextStyles,
    "HasEmailMarketing": HasEmailMarketing,
    "HasEmailMarketingConsent": HasEmailMarketingConsent,
    "HasEmailMarketingNeverSubscribed": HasEmailMarketingNeverSubscribed,
    "HasEmailMarketingSubscribed": HasEmailMarketingSubscribed,
    "HasPushMarketing": HasPushMarketing,
    "HasPushMarketingConsent": HasPushMarketingConsent,
    "HasSMSMarketingConsent": HasSMSMarketingConsent,
    "HasSMSMarketingSubscribed": HasSMSMarketingSubscribed,
    "HeaderBlockData": HeaderBlockData,
    "HeaderBlockStyles": HeaderBlockStyles,
    "HeaderBlockV0": HeaderBlockV0,
    "HeaderBlockV1": HeaderBlockV1,
    "HeaderImageSubBlock": HeaderImageSubBlock,
    "HeaderLinkSubBlock": HeaderLinkSubBlock,
    "HeaderLogoSubBlock": HeaderLogoSubBlock,
    "Heading1Style": Heading1Style,
    "Heading2Style": Heading2Style,
    "Heading3Style": Heading3Style,
    "Heading4Style": Heading4Style,
    "HeadingStyleStyles": HeadingStyleStyles,
    "HorizontalRuleBlockData": HorizontalRuleBlockData,
    "HorizontalRuleBlockStyles": HorizontalRuleBlockStyles,
    "HorizontalRuleBlockV0": HorizontalRuleBlockV0,
    "HorizontalRuleBlockV1": HorizontalRuleBlockV1,
    "IdentifiedProfiles": IdentifiedProfiles,
    "Image": Image,
    "ImageAssetProperties": ImageAssetProperties,
    "ImageBlockCroppingProperties": ImageBlockCroppingProperties,
    "ImageBlockData": ImageBlockData,
    "ImageBlockStyles": ImageBlockStyles,
    "ImageBlockV0": ImageBlockV0,
    "ImageBlockV1": ImageBlockV1,
    "ImageCreateQuery": ImageCreateQuery,
    "ImageCreateQueryResourceObject": ImageCreateQueryResourceObject,
    "ImageCreateQueryResourceObjectAttributes": ImageCreateQueryResourceObjectAttributes,
    "ImageDropShadowStyles": ImageDropShadowStyles,
    "ImagePartialUpdateQuery": ImagePartialUpdateQuery,
    "ImagePartialUpdateQueryResourceObject": ImagePartialUpdateQueryResourceObject,
    "ImagePartialUpdateQueryResourceObjectAttributes": ImagePartialUpdateQueryResourceObjectAttributes,
    "ImageProperties": ImageProperties,
    "ImageResponseObjectResource": ImageResponseObjectResource,
    "ImageResponseObjectResourceAttributes": ImageResponseObjectResourceAttributes,
    "ImageStyles": ImageStyles,
    "ImmediateSendStrategy": ImmediateSendStrategy,
    "ImplicitlyOrExplicitlyReachable": ImplicitlyOrExplicitlyReachable,
    "ImplicitlyOrExplicitlyUnreachable": ImplicitlyOrExplicitlyUnreachable,
    "ImplicitlyReachable": ImplicitlyReachable,
    "ImplicitlyUnreachable": ImplicitlyUnreachable,
    "ImportErrorResponseObjectResource": ImportErrorResponseObjectResource,
    "ImportErrorResponseObjectResourceAttributes": ImportErrorResponseObjectResourceAttributes,
    "InStringArrayFilter": InStringArrayFilter,
    "InTheLastBaseRelativeDateFilter": InTheLastBaseRelativeDateFilter,
    "InboundMessageMethodFilter": InboundMessageMethodFilter,
    "Increment": Increment,
    "InputStyles": InputStyles,
    "IntegerFilter": IntegerFilter,
    "InternalScheduledReportBuilderReportData": InternalScheduledReportBuilderReportData,
    "InternalScheduledReportData": InternalScheduledReportData,
    "InternalServiceAction": InternalServiceAction,
    "InternalServiceActionData": InternalServiceActionData,
    "InternalTrackEventData": InternalTrackEventData,
    "InternalUnknownServiceData": InternalUnknownServiceData,
    "InvalidEmailDateFilter": InvalidEmailDateFilter,
    "IsSetExistenceFilter": IsSetExistenceFilter,
    "LessThanPositiveNumericFilter": LessThanPositiveNumericFilter,
    "Link": Link,
    "LinkStyle": LinkStyle,
    "LinkStyleStyles": LinkStyleStyles,
    "LinkStyles": LinkStyles,
    "ListContainsOperatorListContainsFilter": ListContainsOperatorListContainsFilter,
    "ListCreateQuery": ListCreateQuery,
    "ListCreateQueryResourceObject": ListCreateQueryResourceObject,
    "ListCreateQueryResourceObjectAttributes": ListCreateQueryResourceObjectAttributes,
    "ListLengthFilter": ListLengthFilter,
    "ListListResponseObjectResource": ListListResponseObjectResource,
    "ListListResponseObjectResourceAttributes": ListListResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceAttributes": ListMemberResponseObjectResourceAttributes,
    "ListMemberResponseObjectResourceExtended": ListMemberResponseObjectResourceExtended,
    "ListMemberResponseObjectResourceExtendedAttributes": ListMemberResponseObjectResourceExtendedAttributes,
    "ListMembersAddQuery": ListMembersAddQuery,
    "ListMembersDeleteQuery": ListMembersDeleteQuery,
    "ListPartialUpdateQuery": ListPartialUpdateQuery,
    "ListPartialUpdateQueryResourceObject": ListPartialUpdateQueryResourceObject,
    "ListPartialUpdateQueryResourceObjectAttributes": ListPartialUpdateQueryResourceObjectAttributes,
    "ListRegexOperatorListContainsFilter": ListRegexOperatorListContainsFilter,
    "ListResponseObjectResource": ListResponseObjectResource,
    "ListRetrieveResponseObjectResourceAttributes": ListRetrieveResponseObjectResourceAttributes,
    "ListRetrieveResponseObjectResourceExtended": ListRetrieveResponseObjectResourceExtended,
    "ListRetrieveResponseObjectResourceExtendedAttributes": ListRetrieveResponseObjectResourceExtendedAttributes,
    "ListSetFilter": ListSetFilter,
    "ListSubstringFilter": ListSubstringFilter,
    "ListTrigger": ListTrigger,
    "ListUpdateAction": ListUpdateAction,
    "ListUpdateActionData": ListUpdateActionData,
    "ListsAndSegments": ListsAndSegments,
    "ListsAndSegmentsProperties": ListsAndSegmentsProperties,
    "LocalStaticSend": LocalStaticSend,
    "Location": Location,
    "LocationProperties": LocationProperties,
    "LowInventoryCondition": LowInventoryCondition,
    "LowInventoryConditionConditionGroup": LowInventoryConditionConditionGroup,
    "LowInventoryConditionFilter": LowInventoryConditionFilter,
    "LowInventoryTrigger": LowInventoryTrigger,
    "MailboxProviderMethodFilter": MailboxProviderMethodFilter,
    "ManualAddManualMethodFilter": ManualAddManualMethodFilter,
    "ManualImportManualMethodFilter": ManualImportManualMethodFilter,
    "ManualImportMethodFilter": ManualImportMethodFilter,
    "ManualRemoveMethodFilter": ManualRemoveMethodFilter,
    "ManualSuppressionDateFilter": ManualSuppressionDateFilter,
    "MappedMetricPartialUpdateQuery": MappedMetricPartialUpdateQuery,
    "MappedMetricPartialUpdateQueryResourceObject": MappedMetricPartialUpdateQueryResourceObject,
    "MappedMetricPartialUpdateQueryResourceObjectRelationships": MappedMetricPartialUpdateQueryResourceObjectRelationships,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric": MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetric,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData": MappedMetricPartialUpdateQueryResourceObjectRelationshipsCustomMetricData,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric": MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetric,
    "MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData": MappedMetricPartialUpdateQueryResourceObjectRelationshipsMetricData,
    "MappedMetricResponseObjectResource": MappedMetricResponseObjectResource,
    "MappedMetricResponseObjectResourceAttributes": MappedMetricResponseObjectResourceAttributes,
    "Margin": Margin,
    "MessageBlockedMethodFilter": MessageBlockedMethodFilter,
    "MethodFilter": MethodFilter,
    "MetricAggregateQuery": MetricAggregateQuery,
    "MetricAggregateQueryResourceObject": MetricAggregateQueryResourceObject,
    "MetricAggregateQueryResourceObjectAttributes": MetricAggregateQueryResourceObjectAttributes,
    "MetricAggregateRowDTO": MetricAggregateRowDTO,
    "MetricCreateQueryResourceObject": MetricCreateQueryResourceObject,
    "MetricCreateQueryResourceObjectAttributes": MetricCreateQueryResourceObjectAttributes,
    "MetricPropertyCondition": MetricPropertyCondition,
    "MetricPropertyConditionConditionGroup": MetricPropertyConditionConditionGroup,
    "MetricPropertyConditionFilter": MetricPropertyConditionFilter,
    "MetricPropertyResponseObjectResourceAttributes": MetricPropertyResponseObjectResourceAttributes,
    "MetricPropertyResponseObjectResourceExtended": MetricPropertyResponseObjectResourceExtended,
    "MetricPropertyResponseObjectResourceExtendedAttributes": MetricPropertyResponseObjectResourceExtendedAttributes,
    "MetricResponseObjectResource": MetricResponseObjectResource,
    "MetricResponseObjectResourceAttributes": MetricResponseObjectResourceAttributes,
    "MetricTrigger": MetricTrigger,
    "MobileOverlay": MobileOverlay,
    "MobilePushBadge": MobilePushBadge,
    "MobilePushContent": MobilePushContent,
    "MobilePushContentCreate": MobilePushContentCreate,
    "MobilePushContentUpdate": MobilePushContentUpdate,
    "MobilePushMessageSilentDefinition": MobilePushMessageSilentDefinition,
    "MobilePushMessageSilentDefinitionCreate": MobilePushMessageSilentDefinitionCreate,
    "MobilePushMessageSilentDefinitionUpdate": MobilePushMessageSilentDefinitionUpdate,
    "MobilePushMessageStandardDefinition": MobilePushMessageStandardDefinition,
    "MobilePushMessageStandardDefinitionCreate": MobilePushMessageStandardDefinitionCreate,
    "MobilePushMessageStandardDefinitionUpdate": MobilePushMessageStandardDefinitionUpdate,
    "MobilePushNoBadge": MobilePushNoBadge,
    "MobilePushOptions": MobilePushOptions,
    "MobileStyle": MobileStyle,
    "MobileStyleProperties": MobileStyleProperties,
    "MobileStyleStyles": MobileStyleStyles,
    "ModelDate": ModelDate,
    "MultiBranchSplitAction": MultiBranchSplitAction,
    "MultiBranchSplitActionData": MultiBranchSplitActionData,
    "MultiBranchSplitBranch": MultiBranchSplitBranch,
    "MultiBranchSplitBranchBranchFilter": MultiBranchSplitBranchBranchFilter,
    "MultiBranchSplitBranchBranchFilterConditionGroupsInner": MultiBranchSplitBranchBranchFilterConditionGroupsInner,
    "NextStep": NextStep,
    "NextStepProperties": NextStepProperties,
    "NoEmailMarketing": NoEmailMarketing,
    "NoEmailMarketingConsent": NoEmailMarketingConsent,
    "NoEmailMarketingNeverSubscribed": NoEmailMarketingNeverSubscribed,
    "NoEmailMarketingSubscribed": NoEmailMarketingSubscribed,
    "NoEmailMarketingUnsubscribed": NoEmailMarketingUnsubscribed,
    "NoPushMarketing": NoPushMarketing,
    "NoPushMarketingConsent": NoPushMarketingConsent,
    "NoSMSMarketing": NoSMSMarketing,
    "NoSMSMarketingConsent": NoSMSMarketingConsent,
    "NoSMSMarketingNeverSubscribed": NoSMSMarketingNeverSubscribed,
    "NoSMSMarketingUnsubscribed": NoSMSMarketingUnsubscribed,
    "NonLocalStaticSend": NonLocalStaticSend,
    "NumericOperatorNumericFilter": NumericOperatorNumericFilter,
    "NumericRangeFilter": NumericRangeFilter,
    "ObjectLinks": ObjectLinks,
    "OneClickUnsubscribeMethodFilter": OneClickUnsubscribeMethodFilter,
    "OnlyRelatedLinks": OnlyRelatedLinks,
    "OnsiteProfileCreateQueryResourceObject": OnsiteProfileCreateQueryResourceObject,
    "OnsiteProfileCreateQueryResourceObjectAttributes": OnsiteProfileCreateQueryResourceObjectAttributes,
    "OnsiteProfileMeta": OnsiteProfileMeta,
    "OpenForm": OpenForm,
    "OpenFormProperties": OpenFormProperties,
    "OptInCode": OptInCode,
    "OptInCodeProperties": OptInCodeProperties,
    "OptInCodeStyles": OptInCodeStyles,
    "Padding": Padding,
    "PageVisits": PageVisits,
    "PageVisitsProperties": PageVisitsProperties,
    "PatchCampaignMessageResponse": PatchCampaignMessageResponse,
    "PatchCampaignMessageResponseData": PatchCampaignMessageResponseData,
    "PatchCampaignResponse": PatchCampaignResponse,
    "PatchCatalogCategoryResponse": PatchCatalogCategoryResponse,
    "PatchCatalogItemResponse": PatchCatalogItemResponse,
    "PatchCatalogVariantResponse": PatchCatalogVariantResponse,
    "PatchCouponCodeResponse": PatchCouponCodeResponse,
    "PatchCouponResponse": PatchCouponResponse,
    "PatchCustomMetricResponse": PatchCustomMetricResponse,
    "PatchFlowActionEncodedResponse": PatchFlowActionEncodedResponse,
    "PatchFlowActionEncodedResponseData": PatchFlowActionEncodedResponseData,
    "PatchFlowResponse": PatchFlowResponse,
    "PatchFlowResponseData": PatchFlowResponseData,
    "PatchImageResponse": PatchImageResponse,
    "PatchListPartialUpdateResponse": PatchListPartialUpdateResponse,
    "PatchMappedMetricResponse": PatchMappedMetricResponse,
    "PatchMappedMetricResponseData": PatchMappedMetricResponseData,
    "PatchProfileResponse": PatchProfileResponse,
    "PatchReviewResponseDTO": PatchReviewResponseDTO,
    "PatchReviewResponseDTOData": PatchReviewResponseDTOData,
    "PatchReviewResponseDTODataRelationships": PatchReviewResponseDTODataRelationships,
    "PatchReviewResponseDTODataRelationshipsItem": PatchReviewResponseDTODataRelationshipsItem,
    "PatchReviewResponseDTODataRelationshipsItemData": PatchReviewResponseDTODataRelationshipsItemData,
    "PatchSegmentPartialUpdateResponse": PatchSegmentPartialUpdateResponse,
    "PatchTagGroupResponse": PatchTagGroupResponse,
    "PatchTemplateDndResponse": PatchTemplateDndResponse,
    "PatchTrackingSettingResponse": PatchTrackingSettingResponse,
    "PatchTrackingSettingResponseData": PatchTrackingSettingResponseData,
    "PatchUniversalContentResponse": PatchUniversalContentResponse,
    "PatchWebFeedResponse": PatchWebFeedResponse,
    "PatchWebhookResponse": PatchWebhookResponse,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberConsentChannelSettings": PhoneNumberConsentChannelSettings,
    "PhoneNumberProperties": PhoneNumberProperties,
    "PhoneNumberStyles": PhoneNumberStyles,
    "PostBulkProfileSuppressionsCreateJobResponse": PostBulkProfileSuppressionsCreateJobResponse,
    "PostBulkProfileSuppressionsCreateJobResponseData": PostBulkProfileSuppressionsCreateJobResponseData,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationships": PostBulkProfileSuppressionsCreateJobResponseDataRelationships,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsLists,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsListsDataInner,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegments,
    "PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner": PostBulkProfileSuppressionsCreateJobResponseDataRelationshipsSegmentsDataInner,
    "PostBulkProfileSuppressionsRemoveJobResponse": PostBulkProfileSuppressionsRemoveJobResponse,
    "PostBulkProfileSuppressionsRemoveJobResponseData": PostBulkProfileSuppressionsRemoveJobResponseData,
    "PostCampaignMessageResponse": PostCampaignMessageResponse,
    "PostCampaignMessageResponseData": PostCampaignMessageResponseData,
    "PostCampaignMessageResponseDataAttributes": PostCampaignMessageResponseDataAttributes,
    "PostCampaignMessageResponseDataRelationships": PostCampaignMessageResponseDataRelationships,
    "PostCampaignRecipientEstimationJobResponse": PostCampaignRecipientEstimationJobResponse,
    "PostCampaignRecipientEstimationJobResponseData": PostCampaignRecipientEstimationJobResponseData,
    "PostCampaignResponse": PostCampaignResponse,
    "PostCampaignResponseData": PostCampaignResponseData,
    "PostCampaignSendJobResponse": PostCampaignSendJobResponse,
    "PostCampaignSendJobResponseData": PostCampaignSendJobResponseData,
    "PostCampaignValuesResponseDTO": PostCampaignValuesResponseDTO,
    "PostCampaignValuesResponseDTOData": PostCampaignValuesResponseDTOData,
    "PostCampaignValuesResponseDTODataAttributes": PostCampaignValuesResponseDTODataAttributes,
    "PostCampaignValuesResponseDTODataRelationships": PostCampaignValuesResponseDTODataRelationships,
    "PostCatalogCategoryCreateJobResponse": PostCatalogCategoryCreateJobResponse,
    "PostCatalogCategoryCreateJobResponseData": PostCatalogCategoryCreateJobResponseData,
    "PostCatalogCategoryDeleteJobResponse": PostCatalogCategoryDeleteJobResponse,
    "PostCatalogCategoryDeleteJobResponseData": PostCatalogCategoryDeleteJobResponseData,
    "PostCatalogCategoryDeleteJobResponseDataRelationships": PostCatalogCategoryDeleteJobResponseDataRelationships,
    "PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories": PostCatalogCategoryDeleteJobResponseDataRelationshipsCategories,
    "PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner": PostCatalogCategoryDeleteJobResponseDataRelationshipsCategoriesDataInner,
    "PostCatalogCategoryResponse": PostCatalogCategoryResponse,
    "PostCatalogCategoryResponseData": PostCatalogCategoryResponseData,
    "PostCatalogCategoryResponseDataRelationships": PostCatalogCategoryResponseDataRelationships,
    "PostCatalogCategoryResponseDataRelationshipsItems": PostCatalogCategoryResponseDataRelationshipsItems,
    "PostCatalogCategoryUpdateJobResponse": PostCatalogCategoryUpdateJobResponse,
    "PostCatalogCategoryUpdateJobResponseData": PostCatalogCategoryUpdateJobResponseData,
    "PostCatalogItemCreateJobResponse": PostCatalogItemCreateJobResponse,
    "PostCatalogItemCreateJobResponseData": PostCatalogItemCreateJobResponseData,
    "PostCatalogItemDeleteJobResponse": PostCatalogItemDeleteJobResponse,
    "PostCatalogItemDeleteJobResponseData": PostCatalogItemDeleteJobResponseData,
    "PostCatalogItemDeleteJobResponseDataRelationships": PostCatalogItemDeleteJobResponseDataRelationships,
    "PostCatalogItemDeleteJobResponseDataRelationshipsItems": PostCatalogItemDeleteJobResponseDataRelationshipsItems,
    "PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner": PostCatalogItemDeleteJobResponseDataRelationshipsItemsDataInner,
    "PostCatalogItemResponse": PostCatalogItemResponse,
    "PostCatalogItemResponseData": PostCatalogItemResponseData,
    "PostCatalogItemUpdateJobResponse": PostCatalogItemUpdateJobResponse,
    "PostCatalogItemUpdateJobResponseData": PostCatalogItemUpdateJobResponseData,
    "PostCatalogVariantCreateJobResponse": PostCatalogVariantCreateJobResponse,
    "PostCatalogVariantCreateJobResponseData": PostCatalogVariantCreateJobResponseData,
    "PostCatalogVariantDeleteJobResponse": PostCatalogVariantDeleteJobResponse,
    "PostCatalogVariantDeleteJobResponseData": PostCatalogVariantDeleteJobResponseData,
    "PostCatalogVariantDeleteJobResponseDataRelationships": PostCatalogVariantDeleteJobResponseDataRelationships,
    "PostCatalogVariantDeleteJobResponseDataRelationshipsVariants": PostCatalogVariantDeleteJobResponseDataRelationshipsVariants,
    "PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner": PostCatalogVariantDeleteJobResponseDataRelationshipsVariantsDataInner,
    "PostCatalogVariantResponse": PostCatalogVariantResponse,
    "PostCatalogVariantResponseData": PostCatalogVariantResponseData,
    "PostCatalogVariantResponseDataRelationships": PostCatalogVariantResponseDataRelationships,
    "PostCatalogVariantResponseDataRelationshipsItem": PostCatalogVariantResponseDataRelationshipsItem,
    "PostCatalogVariantResponseDataRelationshipsItemData": PostCatalogVariantResponseDataRelationshipsItemData,
    "PostCatalogVariantUpdateJobResponse": PostCatalogVariantUpdateJobResponse,
    "PostCatalogVariantUpdateJobResponseData": PostCatalogVariantUpdateJobResponseData,
    "PostCouponCodeCreateJobResponse": PostCouponCodeCreateJobResponse,
    "PostCouponCodeCreateJobResponseData": PostCouponCodeCreateJobResponseData,
    "PostCouponCodeResponse": PostCouponCodeResponse,
    "PostCouponCodeResponseData": PostCouponCodeResponseData,
    "PostCouponCodeResponseDataRelationships": PostCouponCodeResponseDataRelationships,
    "PostCouponCodeResponseDataRelationshipsProfile": PostCouponCodeResponseDataRelationshipsProfile,
    "PostCouponCodeResponseDataRelationshipsProfileData": PostCouponCodeResponseDataRelationshipsProfileData,
    "PostCouponResponse": PostCouponResponse,
    "PostCouponResponseData": PostCouponResponseData,
    "PostCustomMetricResponse": PostCustomMetricResponse,
    "PostCustomMetricResponseData": PostCustomMetricResponseData,
    "PostDataSourceResponse": PostDataSourceResponse,
    "PostDataSourceResponseData": PostDataSourceResponseData,
    "PostEncodedFormResponse": PostEncodedFormResponse,
    "PostEncodedFormResponseData": PostEncodedFormResponseData,
    "PostFlowSeriesResponseDTO": PostFlowSeriesResponseDTO,
    "PostFlowSeriesResponseDTOData": PostFlowSeriesResponseDTOData,
    "PostFlowSeriesResponseDTODataAttributes": PostFlowSeriesResponseDTODataAttributes,
    "PostFlowV2Response": PostFlowV2Response,
    "PostFlowV2ResponseData": PostFlowV2ResponseData,
    "PostFlowV2ResponseDataAttributes": PostFlowV2ResponseDataAttributes,
    "PostFlowValuesResponseDTO": PostFlowValuesResponseDTO,
    "PostFlowValuesResponseDTOData": PostFlowValuesResponseDTOData,
    "PostFlowValuesResponseDTODataAttributes": PostFlowValuesResponseDTODataAttributes,
    "PostFlowValuesResponseDTODataRelationships": PostFlowValuesResponseDTODataRelationships,
    "PostFormSeriesResponseDTO": PostFormSeriesResponseDTO,
    "PostFormSeriesResponseDTOData": PostFormSeriesResponseDTOData,
    "PostFormSeriesResponseDTODataAttributes": PostFormSeriesResponseDTODataAttributes,
    "PostFormValuesResponseDTO": PostFormValuesResponseDTO,
    "PostFormValuesResponseDTOData": PostFormValuesResponseDTOData,
    "PostFormValuesResponseDTODataAttributes": PostFormValuesResponseDTODataAttributes,
    "PostImageResponse": PostImageResponse,
    "PostImageResponseData": PostImageResponseData,
    "PostListCreateResponse": PostListCreateResponse,
    "PostListCreateResponseData": PostListCreateResponseData,
    "PostListCreateResponseDataRelationships": PostListCreateResponseDataRelationships,
    "PostListCreateResponseDataRelationshipsProfiles": PostListCreateResponseDataRelationshipsProfiles,
    "PostListCreateResponseDataRelationshipsProfilesDataInner": PostListCreateResponseDataRelationshipsProfilesDataInner,
    "PostMetricAggregateResponse": PostMetricAggregateResponse,
    "PostMetricAggregateResponseData": PostMetricAggregateResponseData,
    "PostMetricAggregateResponseDataAttributes": PostMetricAggregateResponseDataAttributes,
    "PostProfileImportJobResponse": PostProfileImportJobResponse,
    "PostProfileImportJobResponseData": PostProfileImportJobResponseData,
    "PostProfileImportJobResponseDataRelationships": PostProfileImportJobResponseDataRelationships,
    "PostProfileImportJobResponseDataRelationshipsImportErrors": PostProfileImportJobResponseDataRelationshipsImportErrors,
    "PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner": PostProfileImportJobResponseDataRelationshipsImportErrorsDataInner,
    "PostProfileImportJobResponseDataRelationshipsProfiles": PostProfileImportJobResponseDataRelationshipsProfiles,
    "PostProfileImportJobResponseDataRelationshipsProfilesDataInner": PostProfileImportJobResponseDataRelationshipsProfilesDataInner,
    "PostProfileMergeResponse": PostProfileMergeResponse,
    "PostProfileMergeResponseData": PostProfileMergeResponseData,
    "PostProfileResponse": PostProfileResponse,
    "PostProfileResponseData": PostProfileResponseData,
    "PostProfileResponseDataAttributes": PostProfileResponseDataAttributes,
    "PostSegmentCreateResponse": PostSegmentCreateResponse,
    "PostSegmentCreateResponseData": PostSegmentCreateResponseData,
    "PostSegmentSeriesResponseDTO": PostSegmentSeriesResponseDTO,
    "PostSegmentSeriesResponseDTOData": PostSegmentSeriesResponseDTOData,
    "PostSegmentSeriesResponseDTODataAttributes": PostSegmentSeriesResponseDTODataAttributes,
    "PostSegmentValuesResponseDTO": PostSegmentValuesResponseDTO,
    "PostSegmentValuesResponseDTOData": PostSegmentValuesResponseDTOData,
    "PostSegmentValuesResponseDTODataAttributes": PostSegmentValuesResponseDTODataAttributes,
    "PostTagGroupResponse": PostTagGroupResponse,
    "PostTagGroupResponseData": PostTagGroupResponseData,
    "PostTagGroupResponseDataRelationships": PostTagGroupResponseDataRelationships,
    "PostTagResponse": PostTagResponse,
    "PostTagResponseData": PostTagResponseData,
    "PostTagResponseDataRelationships": PostTagResponseDataRelationships,
    "PostTagResponseDataRelationshipsCampaigns": PostTagResponseDataRelationshipsCampaigns,
    "PostTagResponseDataRelationshipsCampaignsDataInner": PostTagResponseDataRelationshipsCampaignsDataInner,
    "PostTemplateDndResponse": PostTemplateDndResponse,
    "PostTemplateDndResponseData": PostTemplateDndResponseData,
    "PostTemplateDndResponseDataAttributes": PostTemplateDndResponseDataAttributes,
    "PostTemplateResponse": PostTemplateResponse,
    "PostTemplateResponseData": PostTemplateResponseData,
    "PostUniversalContentResponse": PostUniversalContentResponse,
    "PostUniversalContentResponseData": PostUniversalContentResponseData,
    "PostWebFeedResponse": PostWebFeedResponse,
    "PostWebFeedResponseData": PostWebFeedResponseData,
    "PostWebhookResponse": PostWebhookResponse,
    "PostWebhookResponseData": PostWebhookResponseData,
    "PredictiveAnalytics": PredictiveAnalytics,
    "PreferencePageFilter": PreferencePageFilter,
    "PreferencePageMethodFilter": PreferencePageMethodFilter,
    "PreviouslySubmitted": PreviouslySubmitted,
    "PriceDropCondition": PriceDropCondition,
    "PriceDropConditionConditionGroup": PriceDropConditionConditionGroup,
    "PriceDropConditionFilter": PriceDropConditionFilter,
    "PriceDropTrigger": PriceDropTrigger,
    "ProductBlockData": ProductBlockData,
    "ProductBlockStyles": ProductBlockStyles,
    "ProductBlockV0": ProductBlockV0,
    "ProductBlockV1": ProductBlockV1,
    "ProductSubBlock": ProductSubBlock,
    "ProfileCreateQuery": ProfileCreateQuery,
    "ProfileCreateQueryResourceObject": ProfileCreateQueryResourceObject,
    "ProfileCreateQueryResourceObjectAttributes": ProfileCreateQueryResourceObjectAttributes,
    "ProfileEventTracked": ProfileEventTracked,
    "ProfileEventTrackedProperties": ProfileEventTrackedProperties,
    "ProfileHasCustomObjectCondition": ProfileHasCustomObjectCondition,
    "ProfileHasCustomObjectFilter": ProfileHasCustomObjectFilter,
    "ProfileHasGroupMembershipCondition": ProfileHasGroupMembershipCondition,
    "ProfileHasNotReceivedEmailMessageCondition": ProfileHasNotReceivedEmailMessageCondition,
    "ProfileHasNotReceivedPushMessageCondition": ProfileHasNotReceivedPushMessageCondition,
    "ProfileHasNotReceivedSmsMessageCondition": ProfileHasNotReceivedSmsMessageCondition,
    "ProfileIdentifierDTOResourceObject": ProfileIdentifierDTOResourceObject,
    "ProfileIdentifierDTOResourceObjectAttributes": ProfileIdentifierDTOResourceObjectAttributes,
    "ProfileImportJobCreateQuery": ProfileImportJobCreateQuery,
    "ProfileImportJobCreateQueryResourceObject": ProfileImportJobCreateQueryResourceObject,
    "ProfileImportJobCreateQueryResourceObjectAttributes": ProfileImportJobCreateQueryResourceObjectAttributes,
    "ProfileImportJobCreateQueryResourceObjectAttributesProfiles": ProfileImportJobCreateQueryResourceObjectAttributesProfiles,
    "ProfileImportJobCreateQueryResourceObjectRelationships": ProfileImportJobCreateQueryResourceObjectRelationships,
    "ProfileImportJobCreateQueryResourceObjectRelationshipsLists": ProfileImportJobCreateQueryResourceObjectRelationshipsLists,
    "ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner": ProfileImportJobCreateQueryResourceObjectRelationshipsListsDataInner,
    "ProfileImportJobResponseObjectResource": ProfileImportJobResponseObjectResource,
    "ProfileImportJobResponseObjectResourceAttributes": ProfileImportJobResponseObjectResourceAttributes,
    "ProfileLocation": ProfileLocation,
    "ProfileMarketingConsentCondition": ProfileMarketingConsentCondition,
    "ProfileMergeQuery": ProfileMergeQuery,
    "ProfileMergeQueryResourceObject": ProfileMergeQueryResourceObject,
    "ProfileMergeQueryResourceObjectRelationships": ProfileMergeQueryResourceObjectRelationships,
    "ProfileMergeQueryResourceObjectRelationshipsProfiles": ProfileMergeQueryResourceObjectRelationshipsProfiles,
    "ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner": ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner,
    "ProfileMeta": ProfileMeta,
    "ProfileMetaPatchProperties": ProfileMetaPatchProperties,
    "ProfileMetricFunnelSteps": ProfileMetricFunnelSteps,
    "ProfileMetricPropertyFilter": ProfileMetricPropertyFilter,
    "ProfileModificationMethodFilter": ProfileModificationMethodFilter,
    "ProfileNoGroupMembershipCondition": ProfileNoGroupMembershipCondition,
    "ProfileNotInFlowCondition": ProfileNotInFlowCondition,
    "ProfileOperationDelete": ProfileOperationDelete,
    "ProfileOperationUpdateOrCreateBoolean": ProfileOperationUpdateOrCreateBoolean,
    "ProfileOperationUpdateOrCreateDate": ProfileOperationUpdateOrCreateDate,
    "ProfileOperationUpdateOrCreateList": ProfileOperationUpdateOrCreateList,
    "ProfileOperationUpdateOrCreateNumeric": ProfileOperationUpdateOrCreateNumeric,
    "ProfileOperationUpdateOrCreateString": ProfileOperationUpdateOrCreateString,
    "ProfilePartialUpdateQuery": ProfilePartialUpdateQuery,
    "ProfilePartialUpdateQueryResourceObject": ProfilePartialUpdateQueryResourceObject,
    "ProfilePermissionsCondition": ProfilePermissionsCondition,
    "ProfilePostalCodeDistanceCondition": ProfilePostalCodeDistanceCondition,
    "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition": ProfilePredictiveAnalyticsChannelAffinityPriorityCondition,
    "ProfilePredictiveAnalyticsChannelAffinityPriorityFilter": ProfilePredictiveAnalyticsChannelAffinityPriorityFilter,
    "ProfilePredictiveAnalyticsChannelAffinityRankCondition": ProfilePredictiveAnalyticsChannelAffinityRankCondition,
    "ProfilePredictiveAnalyticsChannelAffinityRankFilter": ProfilePredictiveAnalyticsChannelAffinityRankFilter,
    "ProfilePredictiveAnalyticsDateCondition": ProfilePredictiveAnalyticsDateCondition,
    "ProfilePredictiveAnalyticsNumericCondition": ProfilePredictiveAnalyticsNumericCondition,
    "ProfilePredictiveAnalyticsStringCondition": ProfilePredictiveAnalyticsStringCondition,
    "ProfilePredictiveAnalyticsStringFilter": ProfilePredictiveAnalyticsStringFilter,
    "ProfilePropertyCondition": ProfilePropertyCondition,
    "ProfilePropertyDateTrigger": ProfilePropertyDateTrigger,
    "ProfileRandomSampleCondition": ProfileRandomSampleCondition,
    "ProfileRegionCondition": ProfileRegionCondition,
    "ProfileResponseObjectResource": ProfileResponseObjectResource,
    "ProfileResponseObjectResourceAttributes": ProfileResponseObjectResourceAttributes,
    "ProfileResponseObjectResourceExtended": ProfileResponseObjectResourceExtended,
    "ProfileResponseObjectResourceExtendedAttributes": ProfileResponseObjectResourceExtendedAttributes,
    "ProfileSubscriptionCreateQueryResourceObject": ProfileSubscriptionCreateQueryResourceObject,
    "ProfileSubscriptionCreateQueryResourceObjectAttributes": ProfileSubscriptionCreateQueryResourceObjectAttributes,
    "ProfileSubscriptionDeleteQueryResourceObject": ProfileSubscriptionDeleteQueryResourceObject,
    "ProfileSubscriptionDeleteQueryResourceObjectAttributes": ProfileSubscriptionDeleteQueryResourceObjectAttributes,
    "ProfileSuppressionCreateQueryResourceObject": ProfileSuppressionCreateQueryResourceObject,
    "ProfileSuppressionCreateQueryResourceObjectAttributes": ProfileSuppressionCreateQueryResourceObjectAttributes,
    "ProfileSuppressionDeleteQueryResourceObject": ProfileSuppressionDeleteQueryResourceObject,
    "ProfileSuppressionDeleteQueryResourceObjectAttributes": ProfileSuppressionDeleteQueryResourceObjectAttributes,
    "ProfileUpsertQuery": ProfileUpsertQuery,
    "ProfileUpsertQueryResourceObject": ProfileUpsertQueryResourceObject,
    "ProfileUpsertQueryResourceObjectAttributes": ProfileUpsertQueryResourceObjectAttributes,
    "PromotionalSMSSubscription": PromotionalSMSSubscription,
    "Property": Property,
    "PropertyOption": PropertyOption,
    "ProvidedLandlineMethodFilter": ProvidedLandlineMethodFilter,
    "ProvidedNoAgeMethodFilter": ProvidedNoAgeMethodFilter,
    "PushActionButton": PushActionButton,
    "PushChannel": PushChannel,
    "PushMarketing": PushMarketing,
    "PushOnOpenApp": PushOnOpenApp,
    "PushOnOpenDeepLink": PushOnOpenDeepLink,
    "PushProfileUpsertQueryResourceObject": PushProfileUpsertQueryResourceObject,
    "PushProfileUpsertQueryResourceObjectAttributes": PushProfileUpsertQueryResourceObjectAttributes,
    "PushSendOptions": PushSendOptions,
    "PushSubscriptionParameters": PushSubscriptionParameters,
    "PushTokenCreateQuery": PushTokenCreateQuery,
    "PushTokenCreateQueryResourceObject": PushTokenCreateQueryResourceObject,
    "PushTokenCreateQueryResourceObjectAttributes": PushTokenCreateQueryResourceObjectAttributes,
    "PushTokenCreateQueryResourceObjectAttributesProfile": PushTokenCreateQueryResourceObjectAttributesProfile,
    "PushTokenDeviceMetadata": PushTokenDeviceMetadata,
    "PushTokenEntry": PushTokenEntry,
    "PushTokenResponseObjectResource": PushTokenResponseObjectResource,
    "PushTokenResponseObjectResourceAttributes": PushTokenResponseObjectResourceAttributes,
    "PushUnsubscriptionParameters": PushUnsubscriptionParameters,
    "QuoteStyle": QuoteStyle,
    "RadioButtons": RadioButtons,
    "RadioButtonsProperties": RadioButtonsProperties,
    "RadioButtonsStyles": RadioButtonsStyles,
    "RatingStyle": RatingStyle,
    "RecordedDateFilter": RecordedDateFilter,
    "Redirect": Redirect,
    "RedirectProperties": RedirectProperties,
    "ReentryCriteria": ReentryCriteria,
    "RejectReasonFake": RejectReasonFake,
    "RejectReasonMisleading": RejectReasonMisleading,
    "RejectReasonOther": RejectReasonOther,
    "RejectReasonPrivateInformation": RejectReasonPrivateInformation,
    "RejectReasonProfanity": RejectReasonProfanity,
    "RejectReasonUnrelated": RejectReasonUnrelated,
    "RelationshipLinks": RelationshipLinks,
    "RelativeAnniversaryDateFilter": RelativeAnniversaryDateFilter,
    "RelativeDateOperatorBaseRelativeDateFilter": RelativeDateOperatorBaseRelativeDateFilter,
    "RelativeDateRangeFilter": RelativeDateRangeFilter,
    "RenderOptions": RenderOptions,
    "RenderOptionsSubObject": RenderOptionsSubObject,
    "ResendOptInCode": ResendOptInCode,
    "Review": Review,
    "ReviewBlockData": ReviewBlockData,
    "ReviewBlockStyles": ReviewBlockStyles,
    "ReviewBlockV0": ReviewBlockV0,
    "ReviewBlockV1": ReviewBlockV1,
    "ReviewPatchQuery": ReviewPatchQuery,
    "ReviewPatchQueryResourceObject": ReviewPatchQueryResourceObject,
    "ReviewPatchQueryResourceObjectAttributes": ReviewPatchQueryResourceObjectAttributes,
    "ReviewProductDTO": ReviewProductDTO,
    "ReviewProperties": ReviewProperties,
    "ReviewPublicReply": ReviewPublicReply,
    "ReviewResponseDTOObjectResource": ReviewResponseDTOObjectResource,
    "ReviewResponseDTOObjectResourceAttributes": ReviewResponseDTOObjectResourceAttributes,
    "ReviewStatusFeatured": ReviewStatusFeatured,
    "ReviewStatusPending": ReviewStatusPending,
    "ReviewStatusPublished": ReviewStatusPublished,
    "ReviewStatusRejected": ReviewStatusRejected,
    "ReviewStatusUnpublished": ReviewStatusUnpublished,
    "ReviewStyles": ReviewStyles,
    "ReviewerNameStyle": ReviewerNameStyle,
    "RichTextMargin": RichTextMargin,
    "RichTextStyle": RichTextStyle,
    "RichTextStyles": RichTextStyles,
    "RowData": RowData,
    "RowStyles": RowStyles,
    "RowV0": RowV0,
    "RowV1": RowV1,
    "SMSChannel": SMSChannel,
    "SMSConsentCheckbox": SMSConsentCheckbox,
    "SMSConsentCheckboxProperties": SMSConsentCheckboxProperties,
    "SMSConsentCheckboxStyles": SMSConsentCheckboxStyles,
    "SMSContent": SMSContent,
    "SMSContentCreate": SMSContentCreate,
    "SMSContentSubObject": SMSContentSubObject,
    "SMSDisclosure": SMSDisclosure,
    "SMSDisclosureAccountDefault": SMSDisclosureAccountDefault,
    "SMSDisclosureCustom": SMSDisclosureCustom,
    "SMSDisclosureProperties": SMSDisclosureProperties,
    "SMSDisclosureStyles": SMSDisclosureStyles,
    "SMSDisclosureTextStyle": SMSDisclosureTextStyle,
    "SMSMarketing": SMSMarketing,
    "SMSMessageDefinition": SMSMessageDefinition,
    "SMSMessageDefinitionCreate": SMSMessageDefinitionCreate,
    "SMSSendOptions": SMSSendOptions,
    "SMSSubscriptionParameters": SMSSubscriptionParameters,
    "SMSTransactional": SMSTransactional,
    "SMSUnsubscriptionParameters": SMSUnsubscriptionParameters,
    "Scroll": Scroll,
    "ScrollProperties": ScrollProperties,
    "SectionData": SectionData,
    "SectionProperties": SectionProperties,
    "SectionStyles": SectionStyles,
    "SectionV0": SectionV0,
    "SectionV1": SectionV1,
    "SegmentCreateQuery": SegmentCreateQuery,
    "SegmentCreateQueryResourceObject": SegmentCreateQueryResourceObject,
    "SegmentCreateQueryResourceObjectAttributes": SegmentCreateQueryResourceObjectAttributes,
    "SegmentDefinition": SegmentDefinition,
    "SegmentListResponseObjectResource": SegmentListResponseObjectResource,
    "SegmentListResponseObjectResourceAttributes": SegmentListResponseObjectResourceAttributes,
    "SegmentMemberResponseObjectResourceAttributes": SegmentMemberResponseObjectResourceAttributes,
    "SegmentMemberResponseObjectResourceExtended": SegmentMemberResponseObjectResourceExtended,
    "SegmentMemberResponseObjectResourceExtendedAttributes": SegmentMemberResponseObjectResourceExtendedAttributes,
    "SegmentPartialUpdateQuery": SegmentPartialUpdateQuery,
    "SegmentPartialUpdateQueryResourceObject": SegmentPartialUpdateQueryResourceObject,
    "SegmentPartialUpdateQueryResourceObjectAttributes": SegmentPartialUpdateQueryResourceObjectAttributes,
    "SegmentResponseObjectResource": SegmentResponseObjectResource,
    "SegmentRetrieveResponseObjectResourceAttributes": SegmentRetrieveResponseObjectResourceAttributes,
    "SegmentRetrieveResponseObjectResourceExtended": SegmentRetrieveResponseObjectResourceExtended,
    "SegmentRetrieveResponseObjectResourceExtendedAttributes": SegmentRetrieveResponseObjectResourceExtendedAttributes,
    "SegmentSeriesRequestDTO": SegmentSeriesRequestDTO,
    "SegmentSeriesRequestDTOResourceObject": SegmentSeriesRequestDTOResourceObject,
    "SegmentSeriesRequestDTOResourceObjectAttributes": SegmentSeriesRequestDTOResourceObjectAttributes,
    "SegmentTrigger": SegmentTrigger,
    "SegmentValuesRequestDTO": SegmentValuesRequestDTO,
    "SegmentValuesRequestDTOResourceObject": SegmentValuesRequestDTOResourceObject,
    "SegmentValuesRequestDTOResourceObjectAttributes": SegmentValuesRequestDTOResourceObjectAttributes,
    "SegmentsProfileMetricCondition": SegmentsProfileMetricCondition,
    "SegmentsProfileMetricFunnelCondition": SegmentsProfileMetricFunnelCondition,
    "SendEmailAction": SendEmailAction,
    "SendEmailActionData": SendEmailActionData,
    "SendInternalAlertAction": SendInternalAlertAction,
    "SendInternalAlertActionData": SendInternalAlertActionData,
    "SendPushNotificationAction": SendPushNotificationAction,
    "SendPushNotificationActionContentExperimentActionData": SendPushNotificationActionContentExperimentActionData,
    "SendPushNotificationActionCurrentExperiment": SendPushNotificationActionCurrentExperiment,
    "SendPushNotificationActionData": SendPushNotificationActionData,
    "SendSmsAction": SendSmsAction,
    "SendSmsActionData": SendSmsActionData,
    "SendTime": SendTime,
    "SendTimeSubObject": SendTimeSubObject,
    "SendWebhookAction": SendWebhookAction,
    "SendWebhookActionData": SendWebhookActionData,
    "SendWhatsAppAction": SendWhatsAppAction,
    "SendWhatsAppActionData": SendWhatsAppActionData,
    "SeriesData": SeriesData,
    "ServerBISSubscriptionCreateQuery": ServerBISSubscriptionCreateQuery,
    "ServerBISSubscriptionCreateQueryResourceObject": ServerBISSubscriptionCreateQueryResourceObject,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributes": ServerBISSubscriptionCreateQueryResourceObjectAttributes,
    "ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile": ServerBISSubscriptionCreateQueryResourceObjectAttributesProfile,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationships": ServerBISSubscriptionCreateQueryResourceObjectRelationships,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariant,
    "ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData": ServerBISSubscriptionCreateQueryResourceObjectRelationshipsVariantData,
    "SftpMethodFilter": SftpMethodFilter,
    "ShopifyIntegrationFilter": ShopifyIntegrationFilter,
    "ShopifyIntegrationMethodFilter": ShopifyIntegrationMethodFilter,
    "SideImageSettings": SideImageSettings,
    "SignupCounter": SignupCounter,
    "SignupCounterProperties": SignupCounterProperties,
    "SignupCounterStyles": SignupCounterStyles,
    "SinceFlowStartDateFilter": SinceFlowStartDateFilter,
    "SkipToSuccess": SkipToSuccess,
    "SmartSendTimeStrategy": SmartSendTimeStrategy,
    "SocialBlockData": SocialBlockData,
    "SocialBlockProperties": SocialBlockProperties,
    "SocialBlockStyles": SocialBlockStyles,
    "SocialBlockV0": SocialBlockV0,
    "SocialBlockV1": SocialBlockV1,
    "SocialIconSubBlock": SocialIconSubBlock,
    "SocialSpacerSubBlock": SocialSpacerSubBlock,
    "SpacerBlockData": SpacerBlockData,
    "SpacerBlockStyles": SpacerBlockStyles,
    "SpacerBlockV0": SpacerBlockV0,
    "SpacerBlockV1": SpacerBlockV1,
    "SpamComplaintMethodFilter": SpamComplaintMethodFilter,
    "SpinToWin": SpinToWin,
    "SpinToWinProperties": SpinToWinProperties,
    "SpinToWinSliceConfig": SpinToWinSliceConfig,
    "SpinToWinSliceStyle": SpinToWinSliceStyle,
    "SpinToWinStyles": SpinToWinStyles,
    "SplitBlockData": SplitBlockData,
    "SplitBlockStyles": SplitBlockStyles,
    "SplitBlockV0": SplitBlockV0,
    "SplitBlockV1": SplitBlockV1,
    "StaticCount": StaticCount,
    "StaticCouponConfig": StaticCouponConfig,
    "StaticDateFilter": StaticDateFilter,
    "StaticDateRangeFilter": StaticDateRangeFilter,
    "StaticImageBlockProperties": StaticImageBlockProperties,
    "StaticProductBlockProperties": StaticProductBlockProperties,
    "StaticReviewBlockProperties": StaticReviewBlockProperties,
    "StaticSendStrategy": StaticSendStrategy,
    "StaticTableBlockProperties": StaticTableBlockProperties,
    "StaticTrackingParam": StaticTrackingParam,
    "StatusDateFilter": StatusDateFilter,
    "Step": Step,
    "StreetAddress": StreetAddress,
    "StringArrayOperatorStringArrayFilter": StringArrayOperatorStringArrayFilter,
    "StringInArrayFilter": StringInArrayFilter,
    "StringOperatorStringFilter": StringOperatorStringFilter,
    "StringPhoneOperatorStringArrayFilter": StringPhoneOperatorStringArrayFilter,
    "SubmitBackInStock": SubmitBackInStock,
    "SubmitBackInStockProperties": SubmitBackInStockProperties,
    "SubmitOptInCode": SubmitOptInCode,
    "SubscribeViaSMS": SubscribeViaSMS,
    "SubscribeViaSMSProperties": SubscribeViaSMSProperties,
    "SubscribeViaWhatsApp": SubscribeViaWhatsApp,
    "SubscribeViaWhatsAppProperties": SubscribeViaWhatsAppProperties,
    "SubscribedSMSIsRcsCapableFilter": SubscribedSMSIsRcsCapableFilter,
    "SubscriptionChannels": SubscriptionChannels,
    "SubscriptionCreateJobCreateQuery": SubscriptionCreateJobCreateQuery,
    "SubscriptionCreateJobCreateQueryResourceObject": SubscriptionCreateJobCreateQueryResourceObject,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributes": SubscriptionCreateJobCreateQueryResourceObjectAttributes,
    "SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles": SubscriptionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationships": SubscriptionCreateJobCreateQueryResourceObjectRelationships,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList": SubscriptionCreateJobCreateQueryResourceObjectRelationshipsList,
    "SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData": SubscriptionCreateJobCreateQueryResourceObjectRelationshipsListData,
    "SubscriptionDeleteJobCreateQuery": SubscriptionDeleteJobCreateQuery,
    "SubscriptionDeleteJobCreateQueryResourceObject": SubscriptionDeleteJobCreateQueryResourceObject,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributes": SubscriptionDeleteJobCreateQueryResourceObjectAttributes,
    "SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles": SubscriptionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationships": SubscriptionDeleteJobCreateQueryResourceObjectRelationships,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList,
    "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData": SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsListData,
    "SubscriptionParameters": SubscriptionParameters,
    "Subscriptions": Subscriptions,
    "SuppressionCreateJobCreateQuery": SuppressionCreateJobCreateQuery,
    "SuppressionCreateJobCreateQueryResourceObject": SuppressionCreateJobCreateQueryResourceObject,
    "SuppressionCreateJobCreateQueryResourceObjectAttributes": SuppressionCreateJobCreateQueryResourceObjectAttributes,
    "SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles": SuppressionCreateJobCreateQueryResourceObjectAttributesProfiles,
    "SuppressionCreateJobCreateQueryResourceObjectRelationships": SuppressionCreateJobCreateQueryResourceObjectRelationships,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsList": SuppressionCreateJobCreateQueryResourceObjectRelationshipsList,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData": SuppressionCreateJobCreateQueryResourceObjectRelationshipsListData,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment": SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegment,
    "SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData": SuppressionCreateJobCreateQueryResourceObjectRelationshipsSegmentData,
    "SuppressionDeleteJobCreateQuery": SuppressionDeleteJobCreateQuery,
    "SuppressionDeleteJobCreateQueryResourceObject": SuppressionDeleteJobCreateQueryResourceObject,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributes": SuppressionDeleteJobCreateQueryResourceObjectAttributes,
    "SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles": SuppressionDeleteJobCreateQueryResourceObjectAttributesProfiles,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationships": SuppressionDeleteJobCreateQueryResourceObjectRelationships,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsList,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsListData,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegment,
    "SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData": SuppressionDeleteJobCreateQueryResourceObjectRelationshipsSegmentData,
    "TableBlockData": TableBlockData,
    "TableBlockStyles": TableBlockStyles,
    "TableBlockV0": TableBlockV0,
    "TableBlockV1": TableBlockV1,
    "TableFallbackHtmlSubBlock": TableFallbackHtmlSubBlock,
    "TableFallbackImageSubBlock": TableFallbackImageSubBlock,
    "TableFallbackTextSubBlock": TableFallbackTextSubBlock,
    "TableHeaderSubBlock": TableHeaderSubBlock,
    "TableHtmlSubBlock": TableHtmlSubBlock,
    "TableImageSubBlock": TableImageSubBlock,
    "TableTextSubBlock": TableTextSubBlock,
    "TagCampaignOp": TagCampaignOp,
    "TagCampaignOpDataInner": TagCampaignOpDataInner,
    "TagCreateQuery": TagCreateQuery,
    "TagCreateQueryResourceObject": TagCreateQueryResourceObject,
    "TagCreateQueryResourceObjectRelationships": TagCreateQueryResourceObjectRelationships,
    "TagCreateQueryResourceObjectRelationshipsTagGroup": TagCreateQueryResourceObjectRelationshipsTagGroup,
    "TagCreateQueryResourceObjectRelationshipsTagGroupData": TagCreateQueryResourceObjectRelationshipsTagGroupData,
    "TagFlowOp": TagFlowOp,
    "TagFlowOpDataInner": TagFlowOpDataInner,
    "TagGroupCreateQuery": TagGroupCreateQuery,
    "TagGroupCreateQueryResourceObject": TagGroupCreateQueryResourceObject,
    "TagGroupCreateQueryResourceObjectAttributes": TagGroupCreateQueryResourceObjectAttributes,
    "TagGroupResponseObjectResource": TagGroupResponseObjectResource,
    "TagGroupResponseObjectResourceAttributes": TagGroupResponseObjectResourceAttributes,
    "TagGroupUpdateQuery": TagGroupUpdateQuery,
    "TagGroupUpdateQueryResourceObject": TagGroupUpdateQueryResourceObject,
    "TagGroupUpdateQueryResourceObjectAttributes": TagGroupUpdateQueryResourceObjectAttributes,
    "TagListOp": TagListOp,
    "TagListOpDataInner": TagListOpDataInner,
    "TagResponseObjectResource": TagResponseObjectResource,
    "TagResponseObjectResourceAttributes": TagResponseObjectResourceAttributes,
    "TagSegmentOp": TagSegmentOp,
    "TagSegmentOpDataInner": TagSegmentOpDataInner,
    "TagUpdateQuery": TagUpdateQuery,
    "TagUpdateQueryResourceObject": TagUpdateQueryResourceObject,
    "TargetDateAction": TargetDateAction,
    "TargetDateActionData": TargetDateActionData,
    "Teaser": Teaser,
    "TeaserStyles": TeaserStyles,
    "TemplateCloneQuery": TemplateCloneQuery,
    "TemplateCloneQueryResourceObject": TemplateCloneQueryResourceObject,
    "TemplateCloneQueryResourceObjectAttributes": TemplateCloneQueryResourceObjectAttributes,
    "TemplateCreateHtmlOrDndQuery": TemplateCreateHtmlOrDndQuery,
    "TemplateCreateHtmlOrDndQueryResourceObject": TemplateCreateHtmlOrDndQueryResourceObject,
    "TemplateCreateHtmlOrDndQueryResourceObjectAttributes": TemplateCreateHtmlOrDndQueryResourceObjectAttributes,
    "TemplateDefinition": TemplateDefinition,
    "TemplateDndResponseObjectResource": TemplateDndResponseObjectResource,
    "TemplateRenderQuery": TemplateRenderQuery,
    "TemplateRenderQueryResourceObject": TemplateRenderQueryResourceObject,
    "TemplateRenderQueryResourceObjectAttributes": TemplateRenderQueryResourceObjectAttributes,
    "TemplateResponseObjectResource": TemplateResponseObjectResource,
    "TemplateResponseObjectResourceAttributes": TemplateResponseObjectResourceAttributes,
    "TemplateUpdateHtmlOrDndQuery": TemplateUpdateHtmlOrDndQuery,
    "TemplateUpdateHtmlOrDndQueryResourceObject": TemplateUpdateHtmlOrDndQueryResourceObject,
    "TemplateUpdateHtmlOrDndQueryResourceObjectAttributes": TemplateUpdateHtmlOrDndQueryResourceObjectAttributes,
    "Text": Text,
    "TextBlockDataV0": TextBlockDataV0,
    "TextBlockDataV1": TextBlockDataV1,
    "TextBlockStylesV0": TextBlockStylesV0,
    "TextBlockStylesV1": TextBlockStylesV1,
    "TextBlockV0": TextBlockV0,
    "TextBlockV1": TextBlockV1,
    "TextProperties": TextProperties,
    "TextStyleStyles": TextStyleStyles,
    "TextStyleV0": TextStyleV0,
    "TextStyleV1": TextStyleV1,
    "TextStyles": TextStyles,
    "ThrottledSendStrategy": ThrottledSendStrategy,
    "TimeDelayAction": TimeDelayAction,
    "TimeDelayActionData": TimeDelayActionData,
    "Timeframe": Timeframe,
    "TrackingParamDTO": TrackingParamDTO,
    "TrackingSettingPartialUpdateQuery": TrackingSettingPartialUpdateQuery,
    "TrackingSettingPartialUpdateQueryResourceObject": TrackingSettingPartialUpdateQueryResourceObject,
    "TrackingSettingPartialUpdateQueryResourceObjectAttributes": TrackingSettingPartialUpdateQueryResourceObjectAttributes,
    "TrackingSettingResponseObjectResource": TrackingSettingResponseObjectResource,
    "TrackingSettingResponseObjectResourceAttributes": TrackingSettingResponseObjectResourceAttributes,
    "TriggerBranchAction": TriggerBranchAction,
    "TriggerBranchActionData": TriggerBranchActionData,
    "TriggerBranchActionDataTriggerFilter": TriggerBranchActionDataTriggerFilter,
    "TriggerBranchActionDataTriggerFilterConditionGroupsInner": TriggerBranchActionDataTriggerFilterConditionGroupsInner,
    "URLPatterns": URLPatterns,
    "URLPatternsProperties": URLPatternsProperties,
    "UnidentifiedProfiles": UnidentifiedProfiles,
    "UniqueCouponConfig": UniqueCouponConfig,
    "UniversalContentCreateQuery": UniversalContentCreateQuery,
    "UniversalContentCreateQueryResourceObject": UniversalContentCreateQueryResourceObject,
    "UniversalContentCreateQueryResourceObjectAttributes": UniversalContentCreateQueryResourceObjectAttributes,
    "UniversalContentPartialUpdateQuery": UniversalContentPartialUpdateQuery,
    "UniversalContentPartialUpdateQueryResourceObject": UniversalContentPartialUpdateQueryResourceObject,
    "UniversalContentPartialUpdateQueryResourceObjectAttributes": UniversalContentPartialUpdateQueryResourceObjectAttributes,
    "UniversalContentResponseObjectResource": UniversalContentResponseObjectResource,
    "UniversalContentResponseObjectResourceAttributes": UniversalContentResponseObjectResourceAttributes,
    "UnsubscriptionChannels": UnsubscriptionChannels,
    "UnsubscriptionParameters": UnsubscriptionParameters,
    "UnsupportedBlock": UnsupportedBlock,
    "UnsupportedSendStrategy": UnsupportedSendStrategy,
    "UpdateProfileAction": UpdateProfileAction,
    "UpdateProfileActionData": UpdateProfileActionData,
    "UtmParam": UtmParam,
    "ValuesData": ValuesData,
    "VariableTimerConfiguration": VariableTimerConfiguration,
    "Version": Version,
    "VersionProperties": VersionProperties,
    "VersionStyles": VersionStyles,
    "VideoBlockData": VideoBlockData,
    "VideoBlockProperties": VideoBlockProperties,
    "VideoBlockStyles": VideoBlockStyles,
    "VideoBlockV0": VideoBlockV0,
    "VideoBlockV1": VideoBlockV1,
    "Visibility": Visibility,
    "WebFeedCreateQuery": WebFeedCreateQuery,
    "WebFeedCreateQueryResourceObject": WebFeedCreateQueryResourceObject,
    "WebFeedCreateQueryResourceObjectAttributes": WebFeedCreateQueryResourceObjectAttributes,
    "WebFeedPartialUpdateQuery": WebFeedPartialUpdateQuery,
    "WebFeedPartialUpdateQueryResourceObject": WebFeedPartialUpdateQueryResourceObject,
    "WebFeedPartialUpdateQueryResourceObjectAttributes": WebFeedPartialUpdateQueryResourceObjectAttributes,
    "WebFeedResponseObjectResource": WebFeedResponseObjectResource,
    "WebFeedResponseObjectResourceAttributes": WebFeedResponseObjectResourceAttributes,
    "WebhookCreateQuery": WebhookCreateQuery,
    "WebhookCreateQueryResourceObject": WebhookCreateQueryResourceObject,
    "WebhookCreateQueryResourceObjectAttributes": WebhookCreateQueryResourceObjectAttributes,
    "WebhookCreateQueryResourceObjectRelationships": WebhookCreateQueryResourceObjectRelationships,
    "WebhookCreateQueryResourceObjectRelationshipsWebhookTopics": WebhookCreateQueryResourceObjectRelationshipsWebhookTopics,
    "WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner": WebhookCreateQueryResourceObjectRelationshipsWebhookTopicsDataInner,
    "WebhookPartialUpdateQuery": WebhookPartialUpdateQuery,
    "WebhookPartialUpdateQueryResourceObject": WebhookPartialUpdateQueryResourceObject,
    "WebhookPartialUpdateQueryResourceObjectAttributes": WebhookPartialUpdateQueryResourceObjectAttributes,
    "WebhookPartialUpdateQueryResourceObjectRelationships": WebhookPartialUpdateQueryResourceObjectRelationships,
    "WebhookResponseObjectResource": WebhookResponseObjectResource,
    "WebhookResponseObjectResourceAttributes": WebhookResponseObjectResourceAttributes,
    "WebhookTopicResponseObjectResource": WebhookTopicResponseObjectResource,
    "WhatsAppSubscriptionParameters": WhatsAppSubscriptionParameters,
    "WhatsAppUnsubscriptionParameters": WhatsAppUnsubscriptionParameters,
    "WhatsappChannel": WhatsappChannel,
    "WhatsappConversationalChannel": WhatsappConversationalChannel,
    "WhatsappMarketingChannel": WhatsappMarketingChannel,
    "WhatsappTransactionalChannel": WhatsappTransactionalChannel,
}

const oneOfMap: {[index: string]: any} = {
    "GetCampaignMessageResponseCompoundDocumentIncludedInner": GetCampaignMessageResponseCompoundDocumentIncludedInnerHelper,
    "GetCampaignResponseCollectionCompoundDocumentIncludedInner": GetCampaignResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetEventResponseCollectionCompoundDocumentIncludedInner": GetEventResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetFlowActionEncodedResponseCompoundDocumentIncludedInner": GetFlowActionEncodedResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowMessageEncodedResponseCompoundDocumentIncludedInner": GetFlowMessageEncodedResponseCompoundDocumentIncludedInnerHelper,
    "GetFlowResponseCollectionCompoundDocumentIncludedInner": GetFlowResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetListListResponseCollectionCompoundDocumentIncludedInner": GetListListResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetMappedMetricResponseCollectionCompoundDocumentIncludedInner": GetMappedMetricResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetProfileResponseCollectionCompoundDocumentIncludedInner": GetProfileResponseCollectionCompoundDocumentIncludedInnerHelper,
    "GetProfileResponseCompoundDocumentIncludedInner": GetProfileResponseCompoundDocumentIncludedInnerHelper,
}

const oneOfMapNoDiscriminator: {[index: string]: Array<any>} = {
    "AbTestActionDataMainAction": [
            "SendEmailAction",
            "SendSmsAction",
    ],
    "ActionOutputConditionFilter2": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "BounceDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "IsSetExistenceFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "ButtonAction": [
            "Close",
            "GoToInbox",
            "NextStep",
            "OpenForm",
            "PromotionalSMSSubscription",
            "Redirect",
            "ResendOptInCode",
            "SkipToSuccess",
            "SubmitBackInStock",
            "SubmitOptInCode",
            "SubscribeViaSMS",
            "SubscribeViaWhatsApp",
    ],
    "CampaignCreateQueryResourceObjectAttributesSendOptions": [
            "EmailSendOptions",
            "PushSendOptions",
            "SMSSendOptions",
    ],
    "CampaignCreateQueryResourceObjectAttributesSendStrategy": [
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
    ],
    "CampaignMessageCreateQueryResourceObjectAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinitionCreate",
            "MobilePushMessageStandardDefinitionCreate",
            "SMSMessageDefinitionCreate",
    ],
    "CampaignMessagePartialUpdateQueryResourceObjectAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinitionUpdate",
            "MobilePushMessageStandardDefinitionUpdate",
            "SMSMessageDefinitionCreate",
    ],
    "CampaignMessageResponseObjectResourceAttributesDefinition": [
            "EmailMessageDefinition",
            "MobilePushMessageSilentDefinition",
            "MobilePushMessageStandardDefinition",
            "SMSMessageDefinition",
    ],
    "CampaignPartialUpdateQueryResourceObjectAttributesSendStrategy": [
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
    ],
    "CampaignResponseObjectResourceAttributesSendOptions": [
            "EmailSendOptions",
            "PushSendOptions",
            "SMSSendOptions",
    ],
    "CampaignResponseObjectResourceAttributesSendStrategy": [
            "ABTestSendStrategy",
            "ImmediateSendStrategy",
            "SmartSendTimeStrategy",
            "StaticSendStrategy",
            "ThrottledSendStrategy",
            "UnsupportedSendStrategy",
    ],
    "CampaignResponseObjectResourceAttributesTrackingOptions": [
            "CampaignsEmailTrackingOptions",
            "CampaignsSMSTrackingOptions",
    ],
    "CampaignValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "CampaignsEmailTrackingOptionsCustomTrackingParamsInner": [
            "DynamicTrackingParam",
            "StaticTrackingParam",
    ],
    "ColumnV1BlocksInner": [
            "ButtonBlockV1",
            "CouponBlockV1",
            "DropShadowBlockV1",
            "HTMLBlockV1",
            "HeaderBlockV1",
            "HorizontalRuleBlockV1",
            "ImageBlockV1",
            "ProductBlockV1",
            "ReviewBlockV1",
            "SocialBlockV1",
            "SpacerBlockV1",
            "SplitBlockV1",
            "TableBlockV1",
            "TextBlockV1",
            "VideoBlockV1",
    ],
    "ConditionGroupConditionsInner": [
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsChannelAffinityPriorityCondition",
            "ProfilePredictiveAnalyticsChannelAffinityRankCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRegionCondition",
            "SegmentsProfileMetricCondition",
            "SegmentsProfileMetricFunnelCondition",
    ],
    "ConditionalBranchActionDataProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "CountdownTimerPropertiesConfiguration": [
            "FixedTimerConfiguration",
            "VariableTimerConfiguration",
    ],
    "CouponPropertiesCoupon": [
            "StaticCouponConfig",
            "UniqueCouponConfig",
    ],
    "CustomMetricConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListRegexOperatorListContainsFilter",
            "ListSubstringFilter",
            "NumericOperatorNumericFilter",
            "StringInArrayFilter",
            "StringOperatorStringFilter",
    ],
    "CustomObjectPropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "CustomObjectTriggerConditionFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringOperatorStringFilter",
    ],
    "ExplicitlyReachableFiltersInner": [
            "EffectiveDateFilter",
            "FormSubscribeFilter",
            "MethodFilter",
            "RecordedDateFilter",
    ],
    "FlowActionEncodedResponseObjectResourceAttributesDefinition": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowActionUpdateQueryResourceObjectAttributesDefinition": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowDefinitionActionsInner": [
            "AbTestAction",
            "ActionOutputSplitAction",
            "BackInStockDelayAction",
            "CodeAction",
            "ConditionalBranchAction",
            "ContentExperimentAction",
            "CountdownDelayAction",
            "InternalServiceAction",
            "ListUpdateAction",
            "MultiBranchSplitAction",
            "SendEmailAction",
            "SendInternalAlertAction",
            "SendPushNotificationAction",
            "SendSmsAction",
            "SendWebhookAction",
            "SendWhatsAppAction",
            "TargetDateAction",
            "TimeDelayAction",
            "TriggerBranchAction",
            "UpdateProfileAction",
    ],
    "FlowDefinitionProfileFilterConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfileNotInFlowCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowDefinitionTriggersInner": [
            "ListTrigger",
            "LowInventoryTrigger",
            "MetricTrigger",
            "PriceDropTrigger",
            "ProfilePropertyDateTrigger",
            "SegmentTrigger",
    ],
    "FlowEmailAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedEmailMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowMessageEncodedResponseObjectResourceAttributesDefinition": [
            "FlowEmail",
            "FlowInternalAlert",
            "FlowPushNotification",
            "FlowSms",
            "FlowWebhook",
            "FlowWhatsApp",
    ],
    "FlowPushNotificationAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedPushMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowPushNotificationBadgeOptions": [
            "Increment",
            "Property",
            "StaticCount",
    ],
    "FlowSmsAdditionalFiltersConditionGroupsInnerConditionsInner": [
            "FlowsProfileMetricCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileHasNotReceivedSmsMessageCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "FlowsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "SinceFlowStartDateFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "HasEmailMarketingConsentConsentStatus": [
            "HasEmailMarketing",
            "HasEmailMarketingNeverSubscribed",
            "HasEmailMarketingSubscribed",
    ],
    "HasEmailMarketingSubscribedFiltersInner": [
            "APIMethodFilter",
            "BackInStockMethodFilter",
            "CustomSourceFilter",
            "DoubleOptinFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "PreferencePageFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "HasSMSMarketingSubscribedFiltersInner": [
            "CheckoutMethodFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "PreferencePageMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
            "SubscribedSMSIsRcsCapableFilter",
    ],
    "HeaderBlockV1SubblocksInner": [
            "HeaderImageSubBlock",
            "HeaderLinkSubBlock",
            "HeaderLogoSubBlock",
    ],
    "ImageAction": [
            "Close",
            "GoToInbox",
            "NextStep",
            "OpenForm",
            "PromotionalSMSSubscription",
            "Redirect",
            "ResendOptInCode",
            "SkipToSuccess",
            "SubmitBackInStock",
            "SubmitOptInCode",
            "SubscribeViaSMS",
            "SubscribeViaWhatsApp",
    ],
    "ImageBlockDataProperties": [
            "DynamicImageBlockProperties",
            "StaticImageBlockProperties",
    ],
    "InternalServiceActionDataServiceConfiguration": [
            "InternalScheduledReportBuilderReportData",
            "InternalScheduledReportData",
            "InternalTrackEventData",
            "InternalUnknownServiceData",
    ],
    "LowInventoryConditionFilter2": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "MetricPropertyConditionFilter2": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "MobilePushBadgeBadgeOptions": [
            "CampaignMessageIncrement",
            "CampaignMessageProperty",
            "CampaignMessageStaticCount",
    ],
    "MobilePushOptionsBadge": [
            "MobilePushBadge",
            "MobilePushNoBadge",
    ],
    "MobilePushOptionsOnOpen": [
            "PushOnOpenApp",
            "PushOnOpenDeepLink",
    ],
    "MultiBranchSplitBranchBranchFilterConditionGroupsInnerConditionsInner": [
            "CustomObjectTriggerCondition",
            "FlowsProfileMetricCondition",
            "MetricPropertyCondition",
            "ProfileHasCustomObjectCondition",
            "ProfileHasGroupMembershipCondition",
            "ProfileMarketingConsentCondition",
            "ProfileNoGroupMembershipCondition",
            "ProfilePermissionsCondition",
            "ProfilePostalCodeDistanceCondition",
            "ProfilePredictiveAnalyticsDateCondition",
            "ProfilePredictiveAnalyticsNumericCondition",
            "ProfilePredictiveAnalyticsStringCondition",
            "ProfilePropertyCondition",
            "ProfileRandomSampleCondition",
            "ProfileRegionCondition",
    ],
    "NoEmailMarketingConsentConsentStatus": [
            "NoEmailMarketing",
            "NoEmailMarketingNeverSubscribed",
            "NoEmailMarketingSubscribed",
            "NoEmailMarketingUnsubscribed",
    ],
    "NoEmailMarketingFiltersInner": [
            "BounceDateFilter",
            "InvalidEmailDateFilter",
            "ManualSuppressionDateFilter",
    ],
    "NoEmailMarketingUnsubscribedFiltersInner": [
            "APIMethodFilter",
            "ConstantContactIntegrationMethodFilter",
            "DataWarehouseImportMethodFilter",
            "InboundMessageMethodFilter",
            "MailboxProviderMethodFilter",
            "ManualImportMethodFilter",
            "ManualRemoveMethodFilter",
            "OneClickUnsubscribeMethodFilter",
            "PreferencePageMethodFilter",
            "ProfileModificationMethodFilter",
            "SftpMethodFilter",
            "SpamComplaintMethodFilter",
            "StatusDateFilter",
    ],
    "NoSMSMarketingConsentConsentStatus": [
            "NoSMSMarketing",
            "NoSMSMarketingNeverSubscribed",
            "NoSMSMarketingUnsubscribed",
    ],
    "NoSMSMarketingUnsubscribedFiltersInner": [
            "BulkRemoveMethodFilter",
            "CarrierDeactivationMethodFilter",
            "CheckoutMethodFilter",
            "FailedAgeGateMethodFilter",
            "FormMethodFilter",
            "InboundMessageMethodFilter",
            "ManualAddManualMethodFilter",
            "ManualImportManualMethodFilter",
            "ManualRemoveMethodFilter",
            "MessageBlockedMethodFilter",
            "PreferencePageMethodFilter",
            "ProvidedLandlineMethodFilter",
            "ProvidedNoAgeMethodFilter",
            "SftpMethodFilter",
            "ShopifyIntegrationMethodFilter",
            "StatusDateFilter",
    ],
    "PostCampaignMessageResponseDataAttributesContent": [
            "EmailContentSubObject",
            "SMSContentSubObject",
    ],
    "PriceDropConditionFilter2": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "ProductBlockDataProperties": [
            "DynamicProductBlockProperties",
            "StaticProductBlockProperties",
    ],
    "ProfileHasCustomObjectFilterFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "NumericOperatorNumericFilter",
            "NumericRangeFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "ProfileHasGroupMembershipConditionTimeframeFilter": [
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "ProfileHasNotReceivedPushMessageConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "InTheLastBaseRelativeDateFilter",
    ],
    "ProfileMarketingConsentConditionConsent": [
            "HasEmailMarketingConsent",
            "HasPushMarketingConsent",
            "HasSMSMarketingConsent",
            "NoEmailMarketingConsent",
            "NoPushMarketingConsent",
            "NoSMSMarketingConsent",
    ],
    "ProfileMetricPropertyFilterFilter": [
            "BooleanFilter",
            "ExistenceOperatorExistenceFilter",
            "ListLengthFilter",
            "ListSetFilter",
            "ListSubstringFilter",
            "NumericOperatorNumericFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
    ],
    "ProfilePermissionsConditionPermission": [
            "ExplicitlyReachable",
            "ExplicitlyUnreachable",
            "ImplicitlyOrExplicitlyReachable",
            "ImplicitlyOrExplicitlyUnreachable",
            "ImplicitlyReachable",
            "ImplicitlyUnreachable",
    ],
    "ProfilePostalCodeDistanceConditionFilter": [
            "GreaterThanPositiveNumericFilter",
            "LessThanPositiveNumericFilter",
    ],
    "ProfilePropertyConditionFilter": [
            "AnniversaryDateFilter",
            "BooleanFilter",
            "CalendarDateFilter",
            "ExistenceOperatorExistenceFilter",
            "ListContainsOperatorListContainsFilter",
            "ListLengthFilter",
            "NumericOperatorNumericFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
            "StringArrayOperatorStringArrayFilter",
            "StringOperatorStringFilter",
            "StringPhoneOperatorStringArrayFilter",
    ],
    "ReviewBlockDataProperties": [
            "DynamicReviewBlockProperties",
            "StaticReviewBlockProperties",
    ],
    "ReviewPatchQueryResourceObjectAttributesStatus": [
            "ReviewStatusFeatured",
            "ReviewStatusPending",
            "ReviewStatusPublished",
            "ReviewStatusRejected",
            "ReviewStatusUnpublished",
    ],
    "ReviewResponseDTOObjectResourceAttributesStatus": [
            "ReviewStatusFeatured",
            "ReviewStatusPending",
            "ReviewStatusPublished",
            "ReviewStatusRejected",
            "ReviewStatusUnpublished",
    ],
    "ReviewStatusRejectedRejectionReason": [
            "RejectReasonFake",
            "RejectReasonMisleading",
            "RejectReasonOther",
            "RejectReasonPrivateInformation",
            "RejectReasonProfanity",
            "RejectReasonUnrelated",
    ],
    "RowV0BlocksInner": [
            "AgeGate",
            "BackInStockEmailConsentCheckbox",
            "Button",
            "Checkboxes",
            "CountdownTimer",
            "Coupon",
            "Dropdown",
            "Email",
            "HTMLText",
            "Image",
            "ModelDate",
            "OptInCode",
            "PhoneNumber",
            "RadioButtons",
            "Review",
            "SMSConsentCheckbox",
            "SMSDisclosure",
            "SignupCounter",
            "SpinToWin",
            "Text",
    ],
    "SMSDisclosurePropertiesContent": [
            "SMSDisclosureAccountDefault",
            "SMSDisclosureCustom",
    ],
    "SegmentValuesRequestDTOResourceObjectAttributesTimeframe": [
            "CustomTimeframe",
            "Timeframe",
    ],
    "SegmentsProfileMetricConditionTimeframeFilter": [
            "AlltimeDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "SegmentsProfileMetricFunnelConditionTimeframeFilter": [
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateRangeFilter",
    ],
    "SocialBlockV1SubblocksInner": [
            "SocialIconSubBlock",
            "SocialSpacerSubBlock",
    ],
    "SplitBlockV1SubblocksInner": [
            "TableHtmlSubBlock",
            "TableImageSubBlock",
            "TableTextSubBlock",
    ],
    "StaticSendStrategyOptions": [
            "LocalStaticSend",
            "NonLocalStaticSend",
    ],
    "StatusDateFilterFilter": [
            "AnniversaryDateFilter",
            "CalendarDateFilter",
            "RelativeAnniversaryDateFilter",
            "RelativeDateOperatorBaseRelativeDateFilter",
            "RelativeDateRangeFilter",
            "StaticDateFilter",
            "StaticDateRangeFilter",
    ],
    "TableBlockDataProperties": [
            "DynamicTableBlockProperties",
            "StaticTableBlockProperties",
    ],
    "TableBlockV1SubblocksInner": [
            "TableFallbackHtmlSubBlock",
            "TableFallbackImageSubBlock",
            "TableFallbackTextSubBlock",
            "TableHeaderSubBlock",
            "TableHtmlSubBlock",
            "TableImageSubBlock",
            "TableTextSubBlock",
    ],
    "TemplateDefinitionStylesInner": [
            "BaseStyle",
            "Heading1Style",
            "Heading2Style",
            "Heading3Style",
            "Heading4Style",
            "LinkStyle",
            "MobileStyle",
            "TextStyleV1",
    ],
    "TrackingParamDTOCampaign": [
            "CampaignTrackingSettingDynamicParam",
            "CampaignTrackingSettingStaticParam",
    ],
    "TrackingParamDTOFlow": [
            "FlowTrackingSettingDynamicParam",
            "FlowTrackingSettingStaticParam",
    ],
    "TriggerBranchActionDataTriggerFilterConditionGroupsInnerConditionsInner": [
            "CustomObjectPropertyCondition",
            "CustomObjectTriggerCondition",
            "LowInventoryCondition",
            "MetricPropertyCondition",
            "PriceDropCondition",
    ],
    "UniversalContentCreateQueryResourceObjectAttributesDefinition": [
            "ButtonBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "SpacerBlockV0",
            "TextBlockV0",
    ],
    "UniversalContentPartialUpdateQueryResourceObjectAttributesDefinition": [
            "ButtonBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "SpacerBlockV0",
            "TextBlockV0",
    ],
    "UniversalContentResponseObjectResourceAttributesDefinition": [
            "ButtonBlockV0",
            "CouponBlockV0",
            "DropShadowBlockV0",
            "HTMLBlockV0",
            "HeaderBlockV0",
            "HorizontalRuleBlockV0",
            "ImageBlockV0",
            "ProductBlockV0",
            "ReviewBlockV0",
            "SectionV0",
            "SocialBlockV0",
            "SpacerBlockV0",
            "SplitBlockV0",
            "TableBlockV0",
            "TextBlockV0",
            "UnsupportedBlock",
            "VideoBlockV0",
    ],
    "UpdateProfileActionDataProfileOperationsInner": [
            "ProfileOperationDelete",
            "ProfileOperationUpdateOrCreateBoolean",
            "ProfileOperationUpdateOrCreateDate",
            "ProfileOperationUpdateOrCreateList",
            "ProfileOperationUpdateOrCreateNumeric",
            "ProfileOperationUpdateOrCreateString",
    ],
    "VersionTriggersInner": [
            "AfterCloseTimeout",
            "BackInStock",
            "CartItemCount",
            "CartProduct",
            "CartValue",
            "Channel",
            "CustomJavascript",
            "Delay",
            "Device",
            "ExitIntent",
            "IdentifiedProfiles",
            "ListsAndSegments",
            "Location",
            "PageVisits",
            "PreviouslySubmitted",
            "ProfileEventTracked",
            "Scroll",
            "URLPatterns",
            "UnidentifiedProfiles",
    ],
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string, serializer: boolean) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            const discriminatorHelper = oneOfMap[expectedType]
            // Check the discriminator
            if (!discriminatorHelper || !discriminatorHelper.discriminator) {
                // the type does not have a discriminator.
              if (oneOfMapNoDiscriminator[expectedType]) {
                for (const index in oneOfMapNoDiscriminator[expectedType]) {
                  const potentialType = oneOfMapNoDiscriminator[expectedType][index];
                  if (
                    enumsMap[potentialType] &&
                    Object.values(enumsMap[potentialType]).includes(data)
                  ) {
                    return potentialType;
                  }
                  if (serializer) {
                    if (ObjectSerializer.serializerValidateType(data, typeMap[potentialType])) {
                      return potentialType;
                    }
                  } else {
                    if (ObjectSerializer.deserializerValidateType(data, typeMap[potentialType])) {
                      return potentialType;
                    }
                  }

                }
              }
              return expectedType; // discriminator was not present (or an empty string)
            } else {
                let discriminatorProperty = discriminatorHelper.discriminator;
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(discriminatorHelper.mapping[discriminatorType]){
                        return discriminatorHelper.mapping[discriminatorType]; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static deserializerValidateType(data: any, potentialType: any): boolean {
      for (const index in potentialType.getAttributeTypeMap()) {
        const attribute = potentialType.getAttributeTypeMap()[index];
        if (!data.hasOwnProperty(attribute.baseName)) {
          return false;
        }
        if (enumsMap[attribute.type]) {
          if (!Object.values(enumsMap[attribute.type]).includes(data[attribute.baseName])) {
            return false;
          }
        }
      }
      return true;
    }
    public static serializerValidateType(data: { [key: string]: any }, potentialType: any): boolean {
      const properties = Object.getOwnPropertyNames(data)
      for (const index in properties) {
        const property = properties[index]
        const attributeType = potentialType.getAttributeTypeMap().find((attribute) => attribute.name === property)
        if(!attributeType) {
          return false
        }
        if (typeof data[property] === "object" && data[property] != null && typeMap[attributeType.type] != null) {
            // for objects, recursively validate attributes
            if (!this.serializerValidateType(data[property], typeMap[attributeType.type])) {
                return false;
            }
        } else if (typeof data[property] === "string" && enumsMap[attributeType.type]) {
            // for enums, check that the value is in the enum
            if (!Object.values(enumsMap[attributeType.type]).includes(data[property])) {
                return false;
            }
        }
      }
      return true
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data instanceof Date ? data.toISOString() : data;
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type] && !oneOfMapNoDiscriminator[type]) { // in case we dont know the type
              return data
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type, true);

            if (!typeMap[type]) {
                // it is an enum, return data
                return data;
            }

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type, false);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
