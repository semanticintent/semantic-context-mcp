/**
 * 🎯 SEMANTIC INTENT: Context Repository Port (Interface)
 *
 * PURPOSE: Define semantic contract for context persistence
 *
 * HEXAGONAL ARCHITECTURE:
 * - This is a PORT (interface) in hexagonal architecture
 * - Domain layer depends on this abstraction
 * - Infrastructure provides ADAPTERS (implementations)
 *
 * SEMANTIC ANCHORING:
 * - Contract expresses WHAT operations are needed
 * - No mention of HOW (D1, Postgres, etc.)
 * - Observable semantic operations only
 *
 * DEPENDENCY INVERSION:
 * - High-level domain doesn't depend on low-level infrastructure
 * - Both depend on this abstraction
 */

import type { ContextSnapshot } from '../../types';

/**
 * Repository contract for context snapshot persistence.
 *
 * SEMANTIC OPERATIONS:
 * - save: Persist semantic snapshot (returns immutable ID)
 * - findByProject: Retrieve by semantic domain anchor
 * - search: Find by semantic meaning (summary + tags)
 */
export interface IContextRepository {
  /**
   * 🎯 SEMANTIC INTENT: Persist context snapshot
   *
   * @param snapshot - Domain entity to persist
   * @returns Immutable identifier for reference
   */
  save(snapshot: ContextSnapshot): Promise<string>;

  /**
   * 🎯 SEMANTIC INTENT: Load contexts by semantic domain
   *
   * @param project - Semantic domain anchor
   * @param limit - Maximum results (bounded for safety)
   * @returns Contexts ordered by temporal semantic relevance (newest first)
   */
  findByProject(project: string, limit: number): Promise<ContextSnapshot[]>;

  /**
   * 🎯 SEMANTIC INTENT: Search by semantic markers
   *
   * @param query - Semantic search terms
   * @param project - Optional domain filter
   * @returns Contexts matching semantic meaning (summary + tags)
   */
  search(query: string, project?: string): Promise<ContextSnapshot[]>;
}
