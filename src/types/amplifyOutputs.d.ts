// src/types/amplifyOutputs.d.ts

export interface PasswordPolicy {
    min_length: number;
    require_lowercase: boolean;
    require_numbers: boolean;
    require_symbols: boolean;
    require_uppercase: boolean;
  }
  
  export interface FieldConfig {
    name: string;
    isArray: boolean;
    type: string;
    isRequired: boolean;
    attributes: Array[]; // The attributes field is an array but its contents are not strictly defined, so 'any[]' is used here
    isReadOnly?: boolean;
  }
  
  export interface AuthRule {
    provider: string;
    ownerField: string;
    allow: string;
    identityClaim: string;
    operations: string[];
  }
  
  export interface AttributeConfig {
    type: string;
    properties?: {
      rules?: AuthRule[];
    };
  }
  
  export interface ModelConfig {
    name: string;
    fields: Record<string, FieldConfig>;
    syncable: boolean;
    pluralName: string;
    attributes: AttributeConfig[];
    primaryKeyInfo: {
      isCustomPrimaryKey: boolean;
      primaryKeyFieldName: string;
      sortKeyFieldNames: string[];
    };
  }
  
  export interface ModelIntrospection {
    version: number;
    models: Record<string, ModelConfig>;
    enums: Record<string, string>; // Adjust if enums have a specific type
    nonModels: Record<string, string>; // Adjust if nonModels have a specific type
  }
  
  export interface DataConfig {
    url: string;
    aws_region: string;
    api_key: string;
    default_authorization_type: string;
    authorization_types: string[];
    model_introspection: ModelIntrospection;
  }
  
  export interface AuthConfig {
    user_pool_id: string;
    aws_region: string;
    user_pool_client_id: string;
    identity_pool_id: string;
    mfa_methods: string[];
    standard_required_attributes: string[];
    username_attributes: string[];
    user_verification_types: string[];
    mfa_configuration: string;
    password_policy: PasswordPolicy;
    unauthenticated_identities_enabled: boolean;
  }
  
  export interface AmplifyOutputs {
    auth: AuthConfig;
    data: DataConfig;
    version: string;
  }
  